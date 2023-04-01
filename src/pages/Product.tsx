import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductAbout from '../components/ProductAbout/ProductAbout';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { IProduct } from '../models/IProduct';
// import { productAPI } from '../services/ProductService';
import { setIsServerOnline } from '../store/reducers/User/user.slice';

const Product: FC = () => {
  const [currentProduct, setCurrentProduct] = useState<IProduct>();

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const product = undefined;
  // const { error, isLoading, data: product } = productAPI.useFetchOneProductQuery(Number(id));
  const localProducts = useAppSelector((state) => state.productReducer.products);
  // const isOnline = useAppSelector((state) => state.userReducer.isServerOnline);

  const setLocalProduct = (id: number) => {
    setCurrentProduct(localProducts.find((item) => item.id === id));
  };

  useEffect(() => {
    // if (isOnline) {
    //   setCurrentProduct(product);
    //   dispatch(setIsServerOnline(true));
    // } else {
    //   setLocalProduct(Number(id));
    //   dispatch(setIsServerOnline(false));
    // }
    setLocalProduct(Number(id));
    dispatch(setIsServerOnline(false));
  }, []);

  const goBack = () => {
    navigate('/catalog');
  };

  return (
    <main className="main">
      <div className="breadcrumbs">
        <p>Главная</p>
        <p onClick={goBack}>Каталог</p>
        <span>{currentProduct?.title}</span>
      </div>
      {/* {isLoading && <h3>Загрузка...</h3>}
      {error && <h3></h3>} */}
      {currentProduct && <ProductAbout product={currentProduct} />}
    </main>
  );
};

export default Product;
