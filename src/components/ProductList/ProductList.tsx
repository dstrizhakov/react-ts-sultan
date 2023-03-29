import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IProduct } from '../../models/IProduct';
import { productAPI } from '../../services/ProductService';
import { fetchProducts } from '../../store/reducers/ActionCreators';
import CreateProductForm from '../Admin/CreateEditProduct/CreateEditProduct';
import ProductItem from '../ProductItem/ProductItem';
import styles from "./ProductList.module.css"

type ProductListPropsType = {
	text?: string;
}

const ProductList: FC<ProductListPropsType> = ({text}) => {

	const [limit, setLimit] = useState(100);
	// const [page, setPage] = useState(3)

	const {error, isLoading, data: products} = productAPI.useFetchAllProductsQuery(limit);
	const [deleteProduct, {}] = productAPI.useDeleteProductMutation();
	const [updateProduct, {}] = productAPI.useUpdateProductMutation();

	const isAdmin = useAppSelector(state => state.userReducer.isAdmin)

	const handleRemove = (product: IProduct) => {
		deleteProduct(product);
	}
	const handleUpdate = (product: IProduct) => {
		updateProduct(product);
	}

	return (
		<div className={styles.wrapper}>
				{isAdmin && <CreateProductForm mode='create'/>}
			<div className={styles.body}>
			{isLoading && <h2>Загрузка...</h2>}
			{error && <h2>Ошибка!</h2>}
			{products?.map((product) => <ProductItem key={product.id} remove={handleRemove} update={handleUpdate} product = {product} />)}
		</div>
		</div>
		
	);
}

export default ProductList;