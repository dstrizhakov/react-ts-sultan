import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IProduct } from '../../models/IProduct';
import { productAPI } from '../../services/ProductService';
import { removeLocalProduct } from '../../store/reducers/Products/products.slice';
import CreateProductForm from '../Admin/CreateEditProduct/CreateEditProduct';
import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductList.module.css';

const ProductList: FC = () => {
  const dispatch = useAppDispatch();

  const [currentProducts, setCurrentProducts] = useState<IProduct[]>();

  const isAdmin = useAppSelector((state) => state.userReducer.isAdmin);
  const isOnline = useAppSelector((state) => state.userReducer.isServerOnline);
  const filterPrice = useAppSelector((state) => state.filtersReducer.price);
  const sort = useAppSelector((state) => state.filtersReducer.sort);
  const [sortTarget, sortDirection] = sort;

  const initialProducts = useAppSelector((state) => state.productReducer.products);

  const [deleteProduct, {}] = productAPI.useDeleteProductMutation();

  useEffect(() => {
    handleFilters();
  }, [initialProducts, filterPrice, sort]);

  const handleFilters = () => {
    const filtered = initialProducts?.filter(
      (prod) => prod.price > filterPrice[0] && prod.price < filterPrice[1]
    );
    if (filtered) {
      let sortedProducts;
      if (sortTarget) {
        sortedProducts = [...filtered]?.sort((a: IProduct, b: IProduct) =>
          sortDirection ? a.price - b.price : b.price - a.price
        );
      } else {
        sortedProducts = [...filtered]?.sort((a: IProduct, b: IProduct) =>
          sortDirection ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
        );
      }
      setCurrentProducts(sortedProducts);
    }
  };

  const handleRemove = (product: IProduct) => {
    if (!isOnline) {
      dispatch(removeLocalProduct(product.id));
    } else {
      deleteProduct(product);
    }
  };

  return (
    <div className={styles.wrapper}>
      {isAdmin && <CreateProductForm mode="create" />}
      <div className={styles.body}>
        {currentProducts?.map((product) => (
          <ProductItem key={product.id} remove={handleRemove} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
