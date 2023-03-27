import { FC } from "react";
import { productSlice } from "../store/reducers/ProductSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import ProductList from "../components/ProductList/ProductList";

const Home: FC = () => {
	// const {count} = useAppSelector(state => state.productReducer)
	// const {increment, decrement} = productSlice.actions;
	// const dispatch = useAppDispatch();

	return (
		<div>
			<ProductList text="Title"/>
		</div>
	)
}

export default Home;