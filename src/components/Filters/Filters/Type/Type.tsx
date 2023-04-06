import { FC } from 'react';
import styles from './Type.module.css';

interface IType {
  variant?: 'vertical' | 'horizontal';
  title: string;
  onClick: (title: string) => void;
}

const Type: FC<IType> = ({ title, onClick, variant = 'horizontal' }) => {
  const handleClick = () => {
    onClick(title);
  };

  return (
    <div className={variant === 'horizontal' ? styles.cols : styles.rows} onClick={handleClick}>
      {title}
    </div>
  );
};

export default Type;
