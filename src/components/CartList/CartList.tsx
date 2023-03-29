import { FC } from "react";
import styles from "./CartList.module.css"
import { ICart } from "../../models/ICart";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import CartItem from "../CartItem/CartItem";



const CartList: FC = () => {

	const cartCount = useAppSelector(state => state.cartReducer.totalCount);
	const cartTotal = useAppSelector(state => state.cartReducer.totalPrice);
	const cartList = useAppSelector(state => state.cartReducer.cartList)

	return (
		<div className={styles.body}>
			{cartList.map(item => <CartItem key={item.id} item={item}/>)}
		</div>
	)
}

export default CartList;