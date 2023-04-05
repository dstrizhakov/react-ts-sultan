import { FC } from 'react';
import BackButton from '../components/BackButton/BackButton';
import CartList from '../components/CartList/CartList';

const Order: FC = () => {
  return (
    <main className="main">
      <div className="breadcrumbs">
        <p>Главная</p>
        <span>Корзина</span>
      </div>
      <div className="back-button">
        <BackButton />
      </div>
      <h2 data-testid="page-title">Корзина</h2>
      <div className="cart__list">
        <CartList />
      </div>
    </main>
  );
};

export default Order;
