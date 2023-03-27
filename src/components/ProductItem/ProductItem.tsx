import { FC } from 'react';
import { IProduct } from '../../models/IProduct';
import Button from '../Button/Button';
import styles from "./ProductItem.module.css"

type ProductItemPropsType = {
	product: IProduct;
}

const ProductItem: FC<ProductItemPropsType> = ({product}) => {
	const {id, img, title, valueType, value, barcode, manufacturer,brand, description, type, price } = product;
	return (
		<div className={styles.body}>
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
					<Button text='В корзину' img='basket' type='small'/>
				</div>
			</div>
		</div>
	);
}

export default ProductItem;