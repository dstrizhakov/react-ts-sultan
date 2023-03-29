import { FC } from "react";
import { productSlice } from "../store/reducers/ProductSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import ProductList from "../components/ProductList/ProductList";
import CartList from "../components/CartList/CartList";

const Order: FC = () => {
	// const {count} = useAppSelector(state => state.productReducer)
	// const {increment, decrement} = productSlice.actions;
	// const dispatch = useAppDispatch();

	return (
		<main className="main">
			<div className="breadcrumbs">
				<p>Главная</p>
				<span>Корзина</span>
			</div>
			<h2>Корзина</h2>
			<div className="cart__list">
				<CartList/>
			</div>
		</main>
	)
}

export default Order;