import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import styles from './Sort.module.css';
import { setSortParam } from '../../../store/reducers/Filters/filters.slice';

const Sort: FC = () => {
  const [initalTarget, initialDirection] = useAppSelector((state) => state.filtersReducer.sort);
  const [sort, setSort] = useState([initalTarget, initialDirection]);

  const dispatch = useAppDispatch();
  const onTargetChange = () => {
    setSort(([target, direction]) => [!target, direction]);
    dispatch(setSortParam([!sort[0], sort[1]]));
  };

  const onDirectionChange = () => {
    setSort(([target, direction]) => [target, !direction]);
    dispatch(setSortParam([sort[0], !sort[1]]));
  };

  return (
    <div className={styles.body}>
      <div className={styles.form}>
        <h4>Сортировка:</h4>
        <div className={styles.target} onClick={onTargetChange}>
          {sort[0] ? <span>Цена</span> : <span>Название</span>}
        </div>
        <div className={styles.type} onClick={onDirectionChange}>
          {sort[1] ? <span className={styles.up}></span> : <span className={styles.down}></span>}
        </div>
      </div>
    </div>
  );
};

export default Sort;
