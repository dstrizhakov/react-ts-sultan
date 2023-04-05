import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductAbout from '../components/ProductAbout/ProductAbout';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { IProduct } from '../models/IProduct';
import { setIsServerOnline } from '../store/reducers/User/user.slice';

const Product: FC = () => {
  const [currentProduct, setCurrentProduct] = useState<IProduct>();

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const localProducts = useAppSelector((state) => state.productReducer.products);

  const setLocalProduct = (id: number) => {
    setCurrentProduct(localProducts.find((item) => item.id === id));
  };

  useEffect(() => {
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
      {currentProduct && <ProductAbout product={currentProduct} />}
    </main>
  );
};

export default Product;
