import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { productAPI } from '../../services/ProductService';
import { fetchProducts } from '../../store/reducers/ActionCreators';
import ProductItem from '../ProductItem/ProductItem';
import styles from "./ProductList.module.css"

type ProductListPropsType = {
	text: string;
}

const ProductList: FC<ProductListPropsType> = ({text}) => {
	// const dispatch = useAppDispatch();
	// const {products, isLoading, error} = useAppSelector(state => state.productReducer);

	// useEffect(()=>{
	// 	dispatch(fetchProducts())
	// }, [ ])
	const {error, isLoading, data: products} = productAPI.useFetchAllProductsQuery(10)

	return (
		<div className={styles.body}>
			{products?.map((product) => {
				return <ProductItem product = {product} />
			})}
			
			{/* {isLoading && <h2>Загрузка...</h2>}
			{error && <h2>{error}</h2>}
			{JSON.stringify(products, null, 2)} */}
		</div>
	);
}

export default ProductList;