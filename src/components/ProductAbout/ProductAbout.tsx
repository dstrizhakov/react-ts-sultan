import { FC, useState } from 'react';
import { IProduct } from '../../models/IProduct';
import styles from './ProductAbout.module.css';
import boxImage from '../../assets/icons/box.svg';
import bottleImage from '../../assets/icons/bottle.svg';
import Button from '../Button/Button';
import { useAppDispatch } from '../../hooks/redux';
import { addToCart } from '../../store/reducers/Cart/cart.slice';
import subscIcon from '../../assets/icons/subsc.svg';
import downloadIcon from '../../assets/icons/download.svg';

type ProductAboutPropsType = {
  product: IProduct;
};

const ProductAbout: FC<ProductAboutPropsType> = ({ product }) => {
  const [count, setCount] = useState(0);

  const dispatch = useAppDispatch();

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  const addHeandler = () => {
    dispatch(addToCart({ id: product.id, product, count: count }));
    setCount(0);
  };

  return (
    <div className={styles.body}>
      <div className={styles.row}>
        <div className={styles.image}>
          <img src={product.img} alt={product.title} />
        </div>
        <div className={styles.content}>
          <span className={styles.status}>В наличии</span>
          <h4>
            <span>{product.brand} </span>
            {product.title}
          </h4>
          <div className={styles.value}>
            <img src={product.valueType === 'volume' ? bottleImage : boxImage} alt="value type" />
            <span>{product.value}</span>
          </div>
          <div className={styles.actions}>
            <div className={styles.price}>{product.price}</div>
            <div className={styles.quantuty}>
              <button onClick={decrement}>-</button>
              <span>{count}</span>
              <button onClick={increment}>+</button>
            </div>
            <div className={styles.add}>
              <Button onClick={addHeandler} text="В КОРЗИНУ" img="basket" type="small" />
            </div>
          </div>
          <div className={styles.catalog}>
            <div className={styles.sub}>
              <img src={subscIcon} alt="subscribe image" />
            </div>
            <div className={styles.sale}>
              <p>
                При покупке от <span>10 000 ₸</span> бесплатная доставка по Кокчетаву и области
              </p>
            </div>
            <div className={styles.cat}>
              <span>Прайс-лист</span>
              <img src={downloadIcon} alt="downloadIcon" />
            </div>
          </div>
          <div className={styles.feature}>
            <p>Производитель:</p>
            <span>{product.manufacturer}</span>
          </div>
          <div className={styles.feature}>
            <p>Брэнд:</p>
            <span>{product.brand}</span>
          </div>
          <div className={styles.feature}>
            <p>Артикул:</p>
            <span>{product.barcode}</span>
          </div>
          <div className={styles.feature}>
            <p>Штрихкод:</p>
            <span>{product.barcode}</span>
          </div>
          <details className={styles.description}>
            <summary>Oписание:</summary>
            {product.description}
          </details>
          <div className={styles.border}></div>
          <details className={styles.description}>
            <summary>Характеристики:</summary>
            <div className={styles.feature}>
              <p>Назначение:</p>
              <span>{product.manufacturer}</span>
            </div>
            <div className={styles.feature}>
              <p>Тип:</p>
              <span>{product.brand}</span>
            </div>
            <div className={styles.feature}>
              <p>Производитель:</p>
              <span>{product.barcode}</span>
            </div>
            <div className={styles.feature}>
              <p>Брэнд:</p>
              <span>{product.barcode}</span>
            </div>
            <div className={styles.feature}>
              <p>Штрихкод:</p>
              <span>{product.barcode}</span>
            </div>
            <div className={styles.feature}>
              <p>Вес:</p>
              <span>{product.value}</span>
            </div>
            <div className={styles.feature}>
              <p>Обьем:</p>
              <span>{product.value}</span>
            </div>
            <div className={styles.feature}>
              <p>Кол-во в коробке:</p>
              <span>{product.value}</span>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default ProductAbout;
