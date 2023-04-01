import { FC } from 'react';
import Filters from '../components/Filters/Filters/Filters';
import Sort from '../components/Filters/Sort/Sort';
import ProductListContainer from '../components/ProductListContainer/ProductListContainer';

const Catalog: FC = () => {
  return (
    <main className="main">
      <div className="breadcrumbs">
        <p>Главная</p>
        <span>Каталог</span>
      </div>
      <div className="row">
        <h2>Косметика и гигиена</h2>
        <Sort />
      </div>
      <div className="calalog">
        <Filters />
        <ProductListContainer />
      </div>
    </main>
  );
};

export default Catalog;
