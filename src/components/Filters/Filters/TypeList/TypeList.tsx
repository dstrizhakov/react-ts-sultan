import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setFilterType } from '../../../../store/reducers/Filters/filters.slice';
import Type from '../Type/Type';
import styles from './TypeList.module.css';

const TypeList = () => {
  const types = useAppSelector((state) => state.productReducer.types);
  const dispatch = useAppDispatch();

  const handleClick = (title: string) => {
    dispatch(setFilterType(title));
  };

  return (
    <div className={styles.list}>
      {types.map((type) => (
        <Type key={type} title={type} onClick={handleClick} />
      ))}
    </div>
  );
};

export default TypeList;
