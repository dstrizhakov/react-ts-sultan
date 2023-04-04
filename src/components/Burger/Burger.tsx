import styles from './Burger.module.css';
import { useState } from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Burger = () => {
  const [visible, setVisible] = useState(false);

  const onBurgerClick = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <div className={styles.button} onClick={onBurgerClick}>
        <div className={!visible ? styles.burger : styles.burgerActive}>
          <span></span>
        </div>
      </div>
      {visible && (
        <div className={styles.menu}>
          <BurgerMenu />
        </div>
      )}
    </>
  );
};

export default Burger;
