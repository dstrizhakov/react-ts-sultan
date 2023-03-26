import { FC } from 'react';
import styles from "./Basket.module.css"
import busketIcon from "../../assets/icons/basket.svg"
import { useAppSelector } from '../../hooks/redux';


type BasketPropsType = {
	count: number;
	total: number;
}

const Basket: FC<BasketPropsType> = ({count, total}) => {
	const {} = useAppSelector(state => state.productReducer)
	return (
		<div className={styles.order}>
		<div className={styles.busket}>
			<img src={busketIcon} alt="busketIcon" />
			<span>{count}</span>
		</div>
		<div className={styles.details}>
			<p>Корзина</p>
			<span>{total} ₸</span>
		</div>
	</div>
	);
}

export default Basket;