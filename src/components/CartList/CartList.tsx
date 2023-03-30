import { FC, useState } from "react";
import styles from "./CartList.module.css"
import { clearCart } from "../../store/reducers/Cart/cart.slice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";



const CartList: FC = () => {

	const [modal, setModal] = useState(false);

	const cartTotal = useAppSelector(state => state.cartReducer.totalPrice);
	const cartList = useAppSelector(state => state.cartReducer.cartList);
	const totalCount = useAppSelector(state => state.cartReducer.totalCount)

	const dispatch = useAppDispatch();

	const completeOrder = async() => {
		setModal(true);
		setTimeout(()=>{
			dispatch(clearCart());
			setModal(false);
		}, 1500)
	}

	return (
		<div className={styles.wrapper}>
			<Modal isOpen={modal} setIsOpen={setModal}><h3>Спасибо за заказ!</h3></Modal>
			<div className={styles.body}>
				{cartList.map(item => <CartItem key={item.id} item={item}/>)}
			</div>
			{totalCount
			?<div className={styles.summary}>
				<Button text="Оформить заказ" type="small" onClick={completeOrder}/>
				<span className={styles.total}>{cartTotal}</span>
			</div>
			:<h3>Корзина пуста...</h3>
			}
			
		</div>
	)
}

export default CartList;