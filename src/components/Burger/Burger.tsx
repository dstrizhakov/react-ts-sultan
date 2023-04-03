import styles from './Burger.module.css';
import { useState } from 'react';

const Burger = () => {
  const [visible, setVisible] = useState(false);

  const onBurgerClick = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <div className={styles.button} onClick={onBurgerClick}>
        <div className={styles.burger}>
          <span></span>
        </div>
      </div>

      {visible && <h1>Меню</h1>}
    </>
  );
};

export default Burger;
