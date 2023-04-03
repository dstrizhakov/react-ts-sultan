import { FC, useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IProduct } from '../../models/IProduct';
import { productAPI } from '../../services/ProductService';
import { removeLocalProduct } from '../../store/reducers/Products/products.slice';
import CreateProductForm from '../Admin/CreateEditProduct/CreateEditProduct';
import Pagination from '../Pagination/Pagination';
import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductList.module.css';

const ProductList: FC = () => {
  const dispatch = useAppDispatch();

  const [currentProducts, setCurrentProducts] = useState<IProduct[]>();
  const [pagProducts, setPagProducts] = useState<IProduct[]>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(6);

  const isAdmin = useAppSelector((state) => state.userReducer.isAdmin);
  const isOnline = useAppSelector((state) => state.userReducer.isServerOnline);
  const filterPrice = useAppSelector((state) => state.filtersReducer.price);
  const sort = useAppSelector((state) => state.filtersReducer.sort);
  const [sortTarget, sortDirection] = sort;
  const manufacturers = useAppSelector((store) => store.filtersReducer.manufacturers);

  const initialProducts = useAppSelector((state) => state.productReducer.products);

  const [deleteProduct, {}] = productAPI.useDeleteProductMutation();

  useEffect(() => {
    //фильтрация - диапазон цен
    let filtered = initialProducts.filter(
      (prod) => prod.price > filterPrice[0] && prod.price < filterPrice[1]
    );
    //фильтрация - производитель(если хотябы один из производителей выбран)
    if (Object.values(manufacturers).includes(true)) {
      filtered = filtered.filter((item) => manufacturers[item.manufacturer]);
    }

    //сортировка - название/цена
    if (filtered) {
      let sortedProducts;
      if (sortTarget) {
        sortedProducts = [...filtered]?.sort((a: IProduct, b: IProduct) =>
          sortDirection ? a.price - b.price : b.price - a.price
        );
      } else {
        sortedProducts = [...filtered]?.sort((a: IProduct, b: IProduct) =>
          sortDirection ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
        );
      }
      setCurrentProducts(sortedProducts);
      // пагинация
      const result = [...sortedProducts].slice((currentPage - 1) * perPage, perPage * currentPage);
      setPagProducts(result);
    }
  }, [
    initialProducts,
    filterPrice,
    sortDirection,
    sortTarget,
    currentPage,
    perPage,
    manufacturers,
  ]);

  const handleRemove = (product: IProduct) => {
    if (!isOnline) {
      dispatch(removeLocalProduct(product.id));
    } else {
      deleteProduct(product);
    }
  };

  const nextPage = useCallback(() => {
    const totalPages = Math.ceil((currentProducts?.length || 0) / perPage);
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  }, [currentProducts, currentPage, perPage]);

  const prevPage = useCallback(() => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  }, [currentPage]);

  return (
    <div className={styles.wrapper}>
      {isAdmin && <CreateProductForm mode="create" />}
      <div className={styles.body}>
        {pagProducts?.map((product) => (
          <ProductItem key={product.id} remove={handleRemove} product={product} />
        ))}
      </div>
      <Pagination
        perPage={perPage}
        totalItemsCount={currentProducts?.length || 0}
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};

export default ProductList;
