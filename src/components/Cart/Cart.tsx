import { FC } from 'react';
import styles from "./Cart.module.css"
import busketIcon from "../../assets/icons/basket.svg"

type CartPropsType = {
	count: number;
	total: number;
}

const Cart: FC<CartPropsType> = ({count, total}) => {

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

export default Cart;