import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setFilterPrice } from '../../../store/reducers/Filters/filters.slice';
import styles from './Filters.module.css';

const Filters: FC = () => {
  const [min, max] = useAppSelector((state) => state.filtersReducer.price);
  const [low, setLow] = useState(min);
  const [high, setHigh] = useState(max);

  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setFilterPrice([low, high]));
  };

  return (
    <div className={styles.body}>
      <h4>ПОДБОР ПО ПАРАМЕТРАМ</h4>
      <div className={styles.param}>
        <h5>
          Цена <span>₸</span>
        </h5>
        <div className={styles.price}>
          <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
            <input type="text" value={low} onChange={(e) => setLow(+e.currentTarget.value)} />
            <span>-</span>
            <input type="text" value={high} onChange={(e) => setHigh(+e.currentTarget.value)} />
            <button type="submit"></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filters;
