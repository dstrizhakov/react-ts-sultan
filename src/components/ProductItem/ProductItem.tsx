import React, { FC } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { IProduct } from '../../models/IProduct';
import { addProductToCart } from '../../store/reducers/mainSlice';
import Button from '../Button/Button';
import styles from "./ProductItem.module.css"

type ProductItemPropsType = {
	product: IProduct;
	remove: (product: IProduct) => void;
	update: (product: IProduct) => void;
}


const ProductItem: FC<ProductItemPropsType> = ({product, remove, update}) => {
	const {id, img, title, valueType, value, barcode, manufacturer, brand, description, type, price } = product;
	
	const dispatch = useAppDispatch();

	const handleRemove = (event: React.MouseEvent) => {
		event.preventDefault();
		remove(product);
	}
	const handleUpdate = (event: React.MouseEvent) => {
		event.preventDefault();
		update(product);
	}
	return (
		<div className={styles.body}> 
			<span onClick={handleRemove} className={styles.delete}>Удалить</span>
			<span onClick={handleUpdate} className={styles.update}>Изменить</span>
			<div className={styles.content}>
				<div className={styles.image}>
					<img src={img} alt="product image" />
				</div>
				<div className={styles.value}>
					<span>{value}</span>
				</div>
				<div className={styles.title}>
					<span>{brand}</span>
					{title}
				</div>
				<div className={styles.feature}>
					<p>Штрихкод:</p>
					<span>{barcode}</span>
				</div>
				<div className={styles.feature}>
					<p>Производитель:</p>
					<span>{manufacturer}</span>
				</div>
				<div className={styles.feature}>
					<p>Брэнд:</p>
					<span>{brand}</span>
				</div>
				<div className={styles.basket}>
					<p>{price}</p>
					<Button onClick={()=>dispatch(addProductToCart({ id, count: 1 }))} text='В корзину' img='basket' type='small'/>
				</div>
			</div>
		</div>
	);
}

export default ProductItem;