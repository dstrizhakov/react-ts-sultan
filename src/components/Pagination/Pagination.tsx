import { FC, useEffect, useState } from 'react';
import './Pagination.css';

interface PaginationPropsType {
  currentPage: number;
  perPage: number;
  totalItemsCount?: number;
  nextPage: () => void;
  prevPage: () => void;
}

const Pagination: FC<PaginationPropsType> = ({
  currentPage,
  perPage,
  totalItemsCount,
  nextPage,
  prevPage,
}) => {
  const totalPages = Math.ceil((totalItemsCount || 0) / perPage);
  const [pages, setPages] = useState<number[]>([]);

  const getArrayTo = (totalPages: number) => {
    return [...Array(totalPages)].map((_, i) => i + 1);
  };

  useEffect(() => {
    setPages(getArrayTo(totalPages));
  }, [totalPages, perPage]);

  return (
    <div className="pagination">
      <div onClick={prevPage} className="pagination-prev"></div>
      {pages.map((page) => {
        return (
          <span
            key={page}
            className={page === currentPage ? 'pagination-item active' : 'pagination-item'}
          >
            {page}
          </span>
        );
      })}
      <div onClick={nextPage} className="pagination-next"></div>
    </div>
  );
};

export default Pagination;
