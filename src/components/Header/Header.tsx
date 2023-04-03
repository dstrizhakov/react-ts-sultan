import { FC } from 'react';
import logo from '../../assets/logo.svg';
import searchIcon from '../../assets/icons/search.svg';
import styles from './Header.module.css';
import Button from '../Button/Button';
import Cart from '../Cart/Cart';
import BackCall from '../BackCall/BackCall';
import Contact from '../Contact/Contact';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import SwitchAdmin from '../Admin/SwitchAdmin/SwitchAdmin';

const Header: FC = () => {
  const cartCount = useAppSelector((state) => state.cartReducer.totalCount);
  const cartTotal = useAppSelector((state) => state.cartReducer.totalPrice);
  return (
    <header className={styles.header}>
      <div className={styles.border}>
        <div className="container">
          <div className={styles.top}>
            <div className={styles.contacts}>
              <Contact type="location" isImg={true} variant="dark" />
              <Contact type="mail" isImg={true} variant="dark" />
            </div>
            <SwitchAdmin />
            <div className={styles.submenu}>
              <a href="##" className={styles.sublink}>
                О компании
              </a>
              <a href="##" className={styles.sublink}>
                Доставка и оплата
              </a>
              <a href="##" className={styles.sublink}>
                Возврат
              </a>
              <a href="##" className={styles.sublink}>
                Контакты
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.border}>
        <div className="container">
          <div className={styles.bottom}>
            <Link to={'/'}>
              <a href="##" className={styles.logo}>
                <img src={logo} alt="logo" />
              </a>
            </Link>
            <Link to={'/catalog'}>
              <Button text="Каталог" img="catalog" />
            </Link>
            <div className={styles.search}>
              <input type="text" placeholder="Поиск..." />
              <span>
                <img src={searchIcon} alt="searchIcon" />
              </span>
            </div>
            <BackCall isImg={true} variant="dark" />
            <Button text="Прайс-лист" img="download" />
            <Link to={'/order'}>
              <Cart count={cartCount} total={cartTotal} variant="large" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
