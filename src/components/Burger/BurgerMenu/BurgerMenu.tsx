import styles from './BurgerMenu.module.css';
import BackCall from '../../BackCall/BackCall';
import Contact from '../../Contact/Contact';

const BurgerMenu = () => {
  return (
    <div className={styles.body}>
      <Contact type="location" isImg={true} variant="dark" />
      <Contact type="mail" isImg={true} variant="dark" />
      <BackCall isImg={false} variant="dark" />
      <div className={styles.menu}>
        <h2>Меню сайта</h2>
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
  );
};

export default BurgerMenu;
