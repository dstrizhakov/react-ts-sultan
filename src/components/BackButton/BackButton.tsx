import { FC } from 'react';
import styles from './BackButton.module.css';
import arrowIcon from '../../assets/icons/arrow.svg';
import { useNavigate } from 'react-router-dom';

const BackButton: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.body} onClick={() => navigate('/catalog')}>
      <div className={styles.back}>
        <img src={arrowIcon} alt="arrowIcon" />
      </div>
      <span>Назад</span>
    </div>
  );
};

export default BackButton;
