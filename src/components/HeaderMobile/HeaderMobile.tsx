import { FC } from 'react';
import logo from '../../assets/logo.svg';
import searchIcon from '../../assets/icons/search-black.svg';
import catalogIcon from '../../assets/icons/catalog-black.svg';
import styles from './HeaderMobile.module.css';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import Burger from '../Burger/Burger';

const HeaderMobile: FC = () => {
  const cartCount = useAppSelector((state) => state.cartReducer.totalCount);
  const cartTotal = useAppSelector((state) => state.cartReducer.totalPrice);
  return (
    <header className={styles.header}>
      <div className={styles.border}>
        <div className="container">
          <div className={styles.top}>
            <Burger />
            <Link to={'/'}>
              <a href="##" className={styles.logo}>
                <img src={logo} alt="logo" />
              </a>
            </Link>
            <Link to={'/order'}>
              <Cart count={cartCount} total={cartTotal} variant="small" />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.border}>
        <div className="container">
          <div className={styles.bottom}>
            <div className={styles.catalog}>
              <Link to={'/catalog'}>
                <img src={catalogIcon} alt="catalogIcon" />
                <span>Каталог</span>
              </Link>
            </div>
            <div className={styles.search}>
              <img src={searchIcon} alt="searchIcon" />
              <span>Поиск</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMobile;
