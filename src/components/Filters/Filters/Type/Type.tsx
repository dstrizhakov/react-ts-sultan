import React, { FC } from 'react';
import styles from './Type.module.css';

interface IType {
  title: string;
  onClick: (title: string) => void;
}

const Type: FC<IType> = ({ title, onClick }) => {
  const handleClick = () => {
    onClick(title);
  };

  return (
    <div className={styles.type} onClick={handleClick}>
      {title}
    </div>
  );
};

export default Type;
