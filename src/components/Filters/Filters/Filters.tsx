import { FC, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { IProduct } from '../../../models/IProduct';
import { setFilterPrice } from '../../../store/reducers/Filters/filters.slice';
import CheckboxList from './CheckboxList/CheckboxList';
import styles from './Filters.module.css';
import TypeList from './TypeList/TypeList';
import arrowIcon from '../../../assets/icons/arrow.svg';

type FiltersPropsType = {
  variant?: 'mobile';
};
const Filters: FC<FiltersPropsType> = ({ variant }) => {
  const [min, max] = useAppSelector((state) => state.filtersReducer.price);
  const products = useAppSelector((state) => state.productReducer.products);

  const [low, setLow] = useState(min);
  const [high, setHigh] = useState(max);

  const [hidden, setHidden] = useState(false);

  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setFilterPrice([low, high]));
  };

  type ManufacturerCounts = {
    [key: string]: number;
  };

  const manufacturers = useMemo(() => {
    const manufacturerCounts = products.reduce((counts: ManufacturerCounts, product: IProduct) => {
      const manufacturer = product.manufacturer;
      counts[manufacturer] = (counts[manufacturer] || 0) + 1;
      return counts;
    }, {});

    return Object.entries(manufacturerCounts).map(([name, count]) => ({
      name,
      count,
    }));
  }, [products]);

  return (
    <div className={styles.body}>
      <div className={styles.row}>
        <h4>ПОДБОР ПО ПАРАМЕТРАМ</h4>
        {variant && (
          <div
            className={hidden === true ? styles.hideActive : styles.hide}
            onClick={() => setHidden(!hidden)}
          >
            <img src={arrowIcon} alt="arrowIcon" />
          </div>
        )}
      </div>

      <div className={hidden === true ? styles.none : styles.param}>
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

      <div className={hidden === true ? styles.none : styles.param}>
        <h4>Производитель:</h4>
        <CheckboxList options={manufacturers} />
        <h4>Тип:</h4>
      </div>

      <TypeList variant="vertical" />
    </div>
  );
};

export default Filters;
