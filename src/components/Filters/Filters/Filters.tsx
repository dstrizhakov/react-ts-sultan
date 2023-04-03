import { FC, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setFilterPrice } from '../../../store/reducers/Filters/filters.slice';
import CheckboxList from './CheckboxList/CheckboxList';
import styles from './Filters.module.css';

const Filters: FC = () => {
  const [min, max] = useAppSelector((state) => state.filtersReducer.price);
  const products = useAppSelector((state) => state.productReducer.products);

  const [low, setLow] = useState(min);
  const [high, setHigh] = useState(max);

  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setFilterPrice([low, high]));
  };

  const options = useMemo(() => {
    const result = new Set();
    products.forEach((product) => {
      result.add(product.manufacturer);
    });
    return [...result].map((item) => ({
      name: item as string,
      count: 10,
    }));
  }, [products]);

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
      <div className={styles.param}>
        <h4>Производитель</h4>
        <CheckboxList options={options} />
      </div>
    </div>
  );
};

export default Filters;
