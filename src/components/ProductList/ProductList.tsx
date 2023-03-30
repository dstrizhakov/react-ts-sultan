import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IProduct } from '../../models/IProduct';
import { productAPI } from '../../services/ProductService';
import { fetchProducts } from '../../store/reducers/ActionCreators';
import CreateProductForm from '../Admin/CreateEditProduct/CreateEditProduct';
import Button from '../Button/Button';
import ProductItem from '../ProductItem/ProductItem';
import styles from "./ProductList.module.css"

type ProductListPropsType = {
	text?: string;
}

const ProductList: FC<ProductListPropsType> = ({text}) => {

	const [currentProducts, setCurrentProducts] = useState<IProduct[]>([])

	const [limit, setLimit] = useState(100);
	// const [page, setPage] = useState(3)
	const isAdmin = useAppSelector(state => state.userReducer.isAdmin)
	const filterPrice = useAppSelector(state => state.filtersReducer.price)
	const sortTarget = useAppSelector(state => state.filtersReducer.sortTarget)
	const sortType = useAppSelector(state => state.filtersReducer.sortType)

	// const {error, isLoading, data: products} = productAPI.useFetchAllProductsQuery(limit);
	const [deleteProduct, {}] = productAPI.useDeleteProductMutation();
	const [updateProduct, {}] = productAPI.useUpdateProductMutation();
	const {error, isLoading, data: products} = productAPI.useFetchAllProductsQuery(limit);
	

	useEffect(()=>{
		handleFilters();
	}, [ products, filterPrice, sortTarget, sortType])

	const handleFilters = () => {
		let filtered = products?.filter((prod) => prod.price>filterPrice[0]&&prod.price<filterPrice[1])
		if(filtered) {
			let sortedProducts;
			if (sortTarget) {
				sortedProducts = [...filtered]?.sort((a:IProduct, b:IProduct) => sortType? a.price - b.price:b.price - a.price)
			} else {
				sortedProducts = [...filtered]?.sort((a:IProduct, b:IProduct) => sortType? a.title.localeCompare(b.title):b.title.localeCompare(a.title))
			}
			setCurrentProducts(sortedProducts);
		}
	}

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
			{isLoading && <h3>Загрузка...</h3>}
			{error && <h3>Ошибка загрузки!</h3>}
			{currentProducts?.map((product) => <ProductItem key={product.id} remove={handleRemove} update={handleUpdate} product = {product} />)}
		</div>
		</div>
		
	);
}

export default ProductList;