import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IProduct } from '../../models/IProduct';
import { addToCart } from '../../store/reducers/Cart/cart.slice';
import CreateProduct from '../Admin/CreateEditProduct/CreateEditProduct';
import Button from '../Button/Button';
import boxImage from '../../assets/icons/box.svg';
import bottleImage from '../../assets/icons/bottle.svg';
import styles from './ProductItem.module.css';
import { useNavigate } from 'react-router-dom';

type ProductItemPropsType = {
  product: IProduct;
  remove: (product: IProduct) => void;
};

const ProductItem: FC<ProductItemPropsType> = ({ product, remove }) => {
  const navigate = useNavigate();

  const {
    id,
    img,
    title,
    valueType,
    value,
    barcode,
    manufacturer,
    brand,
    description,
    type,
    price,
  } = product;

  const dispatch = useAppDispatch();
  const isAdmin = useAppSelector((state) => state.userReducer.isAdmin);

  const handleRemove = () => {
    remove(product);
  };
  const pushAddress = () => {
    navigate(`/catalog/${product.id}`);
  };
  return (
    <div className={styles.body}>
      {isAdmin && (
        <div className={styles.admin}>
          <CreateProduct mode="edit" product={product} />
          <Button onClick={handleRemove} img="remove" type="small" />
        </div>
      )}
      <div className={styles.content}>
        <div onClick={pushAddress} className={styles.image}>
          <img src={img} alt="product image" />
        </div>
        <div className={styles.value}>
          <img src={valueType === 'volume' ? bottleImage : boxImage} alt="value type" />
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
          <Button
            onClick={() => dispatch(addToCart({ id, product, count: 1 }))}
            text="В КОРЗИНУ"
            img="basket"
            type="small"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
