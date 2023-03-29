import { FC } from "react";
import { ICartItem  } from "../../models/ICartItem";
import styles from "./CartItem.module.css"
import removeImage from "../../assets/icons/delete.svg"
import boxImage from "../../assets/icons/box.svg"
import bottleImage from "../../assets/icons/bottle.svg"
import { useAppDispatch } from "../../hooks/redux";
import { changeCount, deleteFromCart } from "../../store/reducers/Cart/cart.slice";

type CartItemPropsType = {
	item: ICartItem;
}

const CartItem: FC<CartItemPropsType> = ({item}) => {

	const dispatch = useAppDispatch();

	const increment = () => {
		dispatch(changeCount({id:item.id, type: 'plus'}));
	} 
	const decrement = () => {
		dispatch(changeCount({id:item.id, type: 'minus'}));
	} 

	return (
		<div className={styles.body}>
			<div className={styles.row}>
				<div className={styles.image}>
					<img src={item.product.img} alt="product image" />
				</div>
				<div className={styles.content}>
					<div className={styles.valueType}>
						<img src={item.product.valueType ==='volume'? bottleImage : boxImage} alt="value type" />
						<span>{item.product.value}</span>
					</div>
					<h4>{item.product.title}</h4>
					<p>{item.product.description}</p>
				</div>
				<div className={styles.quantuty}>
					<button onClick={increment}>+</button>
					<span>{item.count}</span>
					<button onClick={decrement}>-</button>
				</div>
				<div className={styles.price}>
					{item.product.price}
				</div>
				<div className={styles.remove}>
					<button onClick={()=>dispatch(deleteFromCart(item.id))}>
						<img src={removeImage} alt="remove item" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default CartItem;