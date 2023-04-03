import { FC } from 'react';
import styles from './Checkbox.module.css';

type CheckboxPropsType = {
  name: string;
  count?: number;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: FC<CheckboxPropsType> = ({ name, count, checked, onChange }) => {
  return (
    <div className={styles.checkbox}>
      <input id={name} name={name} type="checkbox" checked={checked} onChange={onChange} />
      <label htmlFor={name}>{name}</label>
      <span>({count})</span>
    </div>
  );
};

export default Checkbox;
