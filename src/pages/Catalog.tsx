import { FC } from 'react';
import Filters from '../components/Filters/Filters/Filters';
import TypeList from '../components/Filters/Filters/TypeList/TypeList';
import Sort from '../components/Filters/Sort/Sort';
import ProductListContainer from '../components/ProductListContainer/ProductListContainer';
import CatalogLayout from '../layouts/CatalogLayout/CatalogLayout';

const Catalog: FC = () => {
  return <CatalogLayout />;
};

export default Catalog;
