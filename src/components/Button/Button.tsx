import { FC } from 'react';
import styles from './Button.module.css';
import catalogIcon from '../../assets/icons/catalog-white.svg';
import downloadIcon from '../../assets/icons/download-white.svg';
import cartIcon from '../../assets/icons/basket-white.svg';
import removeIcon from '../../assets/icons/delete.svg';

type ButtonPropsType = {
  text?: string;
  img?: 'catalog' | 'download' | 'basket' | 'remove';
  type?: 'small';
  onClick?: () => void;
};

const Button: FC<ButtonPropsType> = ({ text, img, type, onClick }) => {
  return (
    <div onClick={onClick} className={type === 'small' ? styles.buttonSmall : styles.button}>
      <span>{text}</span>
      {(() => {
        switch (img) {
          case 'catalog':
            return <img src={catalogIcon} alt="catalogIcon" />;
          case 'download':
            return <img src={downloadIcon} alt="downloadIcon" />;
          case 'basket':
            return <img src={cartIcon} alt="cartIcon" />;
          case 'remove':
            return <img src={removeIcon} alt="removeIcon" />;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default Button;
