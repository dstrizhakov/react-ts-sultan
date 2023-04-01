import { FC } from 'react';
import CartList from '../components/CartList/CartList';

const Order: FC = () => {
  return (
    <main className="main">
      <div className="breadcrumbs">
        <p>Главная</p>
        <span>Корзина</span>
      </div>
      <h2>Корзина</h2>
      <div className="cart__list">
        <CartList />
      </div>
    </main>
  );
};

export default Order;
