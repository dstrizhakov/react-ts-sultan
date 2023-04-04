import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setFilterType, resetFilterType } from '../../../../store/reducers/Filters/filters.slice';
import { addLocalType } from '../../../../store/reducers/Products/products.slice';
import Type from '../Type/Type';
import styles from './TypeList.module.css';

type TypeListPropsType = {
  variant: 'vertical' | 'horizontal';
};

const TypeList: FC<TypeListPropsType> = ({ variant }) => {
  const types = useAppSelector((state) => state.productReducer.types);
  const isAdmin = useAppSelector((state) => state.userReducer.isAdmin);
  const dispatch = useAppDispatch();

  // const [currenTypes, setCurrenTypes] = useState(types);
  // useEffect(() => {
  //   setCurrenTypes(types);
  // }, [types]);

  const [input, setInput] = useState('');

  const handleClick = (title: string) => {
    dispatch(setFilterType(title));
  };
  const handleReset = () => {
    dispatch(resetFilterType());
  };
  // const onInputChangeHandler = (event) => {};
  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(addLocalType(input));
    console.log(input);
  };
  return (
    <div className={variant === 'horizontal' ? styles.list : styles.row}>
      {types.map((type) => (
        <Type key={type} variant={variant} title={type} onClick={handleClick} />
      ))}
      <div onClick={handleReset} className={styles.all}>
        Всe...
      </div>
      <div className={isAdmin ? styles.form : styles.none}>
        <input
          type="text"
          name="Добавить тип"
          id="add-type"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={onSubmit}>Добавить</button>
      </div>
    </div>
  );
};

export default TypeList;
