import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IProduct } from '../../models/IProduct';
import { productAPI } from '../../services/ProductService';
import { fetchProducts } from '../../store/reducers/ActionCreators';
import { setProducts } from '../../store/reducers/mainSlice';
import CreateProductForm from '../admin/createProduct/CreateProduct';
import ProductItem from '../ProductItem/ProductItem';
import styles from "./ProductList.module.css"

type ProductListPropsType = {
	text?: string;
}

const ProductList: FC<ProductListPropsType> = ({text}) => {

	// const dispatch = useAppDispatch();
	// const { cartList } = useAppSelector(state => state.mainReducer)
	// const {products, isLoading, error} = useAppSelector(state => state.productReducer);
	// useEffect(()=>{
	// 	dispatch(fetchProducts())
	// }, [ ])

	const [limit, setLimit] = useState(100);
	// const [page, setPage] = useState(3)

	const {error, isLoading, data: products} = productAPI.useFetchAllProductsQuery(limit);
	const [deleteProduct, {}] = productAPI.useDeleteProductMutation();
	const [updateProduct, {}] = productAPI.useUpdateProductMutation();

	// const [createProduct, {}] = productAPI.useCreateProductMutation()
	// useEffect(()=>{
	// 	dispatch(setProducts(products))
	// },[ products ])

// const handleCreateProduct =  async () => {
// mockProduct.id = +Date.now();
// await createProduct(mockProduct)
// }
const handleRemove = (product: IProduct) => {
	deleteProduct(product);
}
const handleUpdate = (product: IProduct) => {
	// тут заполняем форму старыми данными
	updateProduct(product);
}

	return (
		<div className={styles.wrapper}>
				<CreateProductForm />
			<div className={styles.body}>
			{/* <button onClick={handleCreateProduct}>Create</button> */}
			{isLoading && <h2>Загрузка...</h2>}
			{error && <h2>Ошибка!</h2>}
			{products?.map((product) => <ProductItem key={product.id} remove={handleRemove} update={handleUpdate} product = {product} />)}

		</div>
		</div>
		
	);
}

export default ProductList;