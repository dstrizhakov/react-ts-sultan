import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { productAPI } from '../../services/ProductService';
import { setLocalProducts } from '../../store/reducers/Products/products.slice';
import { setIsServerOnline } from '../../store/reducers/User/user.slice';
import ProductList from '../ProductList/ProductList';
import mock from '../../../server/mock.json';
import styles from './ProductListContainer.module.css';

const ProductListContainer: FC = () => {
  const dispatch = useAppDispatch();

  const { error, isLoading, data: products } = productAPI.useFetchAllProductsQuery(100);

  useEffect(() => {
    if (products) {
      dispatch(setLocalProducts(products));
      dispatch(setIsServerOnline(true));
    } else {
      dispatch(setLocalProducts(mock.products));
      dispatch(setIsServerOnline(false));
    }
  }, [products]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        {isLoading && <h3>Загрузка...</h3>}
        {error && <h3>Сервер не доступен! Данные загружены из JSON...</h3>}
      </div>
      <ProductList />
    </div>
  );
};

export default ProductListContainer;
