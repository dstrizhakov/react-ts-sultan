import { useMediaQuery } from 'react-responsive';
import { useRoutes } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';
import Filters from '../../components/Filters/Filters/Filters';
import TypeList from '../../components/Filters/Filters/TypeList/TypeList';
import Sort from '../../components/Filters/Sort/Sort';

import ProductListContainer from '../../components/ProductListContainer/ProductListContainer';

function CatalogLayout() {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <main className="main">
      {isDesktop && (
        <>
          <div className="breadcrumbs">
            <p>Главная</p>
            <span>Каталог</span>
          </div>
          <div className="row">
            <h2 data-testid="page-title">Косметика и гигиена</h2>
            <Sort />
          </div>
          <TypeList variant="horizontal" />
          <div className="calalog">
            <Filters />
            <ProductListContainer />
          </div>
        </>
      )}
      {isTablet && (
        <>
          <div className="breadcrumbs">
            <p>Главная</p>
            <span>Каталог</span>
          </div>
          <div className="row">
            <h2>Косметика и гигиена</h2>
            <Sort />
          </div>
          <TypeList variant="horizontal" />
          <div className="calalog">
            <Filters />
            <ProductListContainer />
          </div>
        </>
      )}
      {isMobile && (
        <>
          <BackButton />
          <h2>Косметика и гигиена</h2>
          <div className="calalog">
            <Filters variant="mobile" />
            <Sort />
            <ProductListContainer />
          </div>
        </>
      )}
    </main>
  );
}
export default CatalogLayout;
