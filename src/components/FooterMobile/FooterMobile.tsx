/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import styles from './FooterMobile.module.css';
import logo from '../../assets/logo-white.svg';
import arrowIcon from '../../assets/icons/arrow.svg';
import visaImg from '../../assets/Visa.png';
import mastercardImg from '../../assets/Mastercard.png';
import waImg from '../../assets/what.png';
import teleImg from '../../assets/tele.png';
import BackCall from '../BackCall/BackCall';
import Button from '../Button/Button';
import Contact from '../Contact/Contact';

const FooterMobile: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.column}>
          <div className={styles.about}>
            <div className={styles.row}>
              <img src={logo} alt="logo" />
              <Button text="Прайс-лист" img="download" type="small" />
            </div>
            <p>
              Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и
              Акмолинской области
            </p>
            <span>Подпишись на скидки и акции</span>
            <div className={styles.subscribe}>
              <input type="text" placeholder="Введите ваш E-mail..." />
              <span>
                <img src={arrowIcon} alt="arrow icon" />
              </span>
            </div>
          </div>
          <div className={styles.flex}>
            <div className={styles.menu}>
              <h3>Меню сайта:</h3>
              <a href="##" className={styles.link}>
                О компании
              </a>
              <a href="##" className={styles.link}>
                Доставка и оплата
              </a>
              <a href="##" className={styles.link}>
                Возврат
              </a>
              <a href="##" className={styles.link}>
                Контакты
              </a>
            </div>
            <div className={styles.caregory}>
              <h3>Категории:</h3>
              <a href="##" className={styles.link}>
                Бытовая химия
              </a>
              <a href="##" className={styles.link}>
                Косметика и гигиена
              </a>
              <a href="##" className={styles.link}>
                Товары для дома
              </a>
              <a href="##" className={styles.link}>
                Товары для детей и мам
              </a>
              <a href="##" className={styles.link}>
                Посуда
              </a>
            </div>
            <div className={styles.contacts}>
              <h3>Контакты:</h3>
              <BackCall isImg={false} variant="white" />
              <Contact type="mail" isImg={false} variant="white" />
              <div className={styles.payments}>
                <img src={visaImg} alt="visaImg" />
                <img src={mastercardImg} alt="mastercardImg" />
              </div>
            </div>
            <div className={styles.social}>
              <p>
                Связь в<br /> мессенджерах:
              </p>
              <img src={waImg} alt="waImg" />
              <img src={teleImg} alt="teleImg" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
