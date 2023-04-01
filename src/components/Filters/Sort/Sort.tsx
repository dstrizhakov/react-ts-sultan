import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import styles from './Sort.module.css';
import {
  setSortTarget,
  setSortType,
  setSortParam,
} from '../../../store/reducers/Filters/filters.slice';

const Sort: FC = () => {
  const sortByInitial = useAppSelector((state) => state.filtersReducer.sortTarget);
  const sortToInitial = useAppSelector((state) => state.filtersReducer.sortType);

  const [initalTarget, initialDirection] = useAppSelector((state) => state.filtersReducer.sort);
  const [sort, setSort] = useState([initalTarget, initialDirection]);

  const [sortBy, setSortBy] = useState<boolean>(sortByInitial);
  const [sortTo, setSortTo] = useState<boolean>(sortToInitial);

  const dispatch = useAppDispatch();

  const onTargetChange = () => {
    setSort(([target, direction]) => [!target, direction]);
    dispatch(setSortParam(sort));

    setSortBy((prev) => !prev);
    dispatch(setSortTarget(sortBy));
  };
  const onDirectionChange = () => {
    setSort(([target, direction]) => [target, !direction]);
    dispatch(setSortParam(sort));

    setSortTo((prev) => !prev);
    dispatch(setSortType(sortTo));
  };

  return (
    <div className={styles.body}>
      <div className={styles.form}>
        <h4>Сортировка:</h4>
        <div className={styles.target} onClick={onTargetChange}>
          {sortBy ? <span>Цена</span> : <span>Название</span>}
        </div>
        <div className={styles.type} onClick={onDirectionChange}>
          {sortTo ? <span className={styles.up}></span> : <span className={styles.down}></span>}
        </div>
      </div>
    </div>
  );
};

export default Sort;
