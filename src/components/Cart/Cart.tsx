import { FC } from 'react';
import styles from './Cart.module.css';
import busketIcon from '../../assets/icons/basket.svg';

type CartPropsType = {
  variant: 'small' | 'large';
  count: number;
  total: number;
};

const Cart: FC<CartPropsType> = ({ count, total, variant }) => {
  return (
    <div className={styles.order}>
      <div className={variant === 'large' ? styles.busket : styles.busketSmall}>
        <img src={busketIcon} alt="busketIcon" />
        <span>{count}</span>
      </div>
      <div className={variant === 'large' ? styles.details : styles.none}>
        <p>Корзина</p>
        <span>{total} ₸</span>
      </div>
    </div>
  );
};

export default Cart;
