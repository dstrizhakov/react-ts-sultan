import { FC } from 'react';
import styles from './BackCall.module.css';
import supportIcon from '../../assets/support.png';

type BackCallPropsType = {
  isImg: boolean;
  variant: 'dark' | 'white';
};

const BackCall: FC<BackCallPropsType> = ({ isImg, variant }) => {
  return (
    <div className={styles.call}>
      <div className={variant === 'dark' ? styles.dark : styles.white}>
        <span>+7 (777) 490-00-91</span>
        <p>время работы: 9:00-20:00</p>
        <a href="##">Заказать звонок</a>
      </div>
      {isImg && <img src={supportIcon} alt="supportIcon" />}
    </div>
  );
};

export default BackCall;
