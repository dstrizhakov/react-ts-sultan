import { FC } from "react";
import { productSlice } from "../store/reducers/ProductSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

const Home: FC = () => {
	const {count} = useAppSelector(state => state.productReducer)
	const {increment, decrement} = productSlice.actions;
	const dispatch = useAppDispatch();

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={()=>dispatch(increment(1))}>increment</button>
			<button onClick={()=>dispatch(decrement(1))}>increment</button>
		</div>
	)
}

export default Home;