import { render } from '@testing-library/react';
import Catalog from '../pages/Catalog';
import productsData from '../../server/mock.json';
import { IProductListType } from '../store/reducers/Products/products.slice';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Dispatch, AnyAction } from 'redux';
import { IProduct } from '../models/IProduct';

const middlewares = [thunk];
const products: IProduct[] = productsData.products;

describe('Catalog page', () => {
  type PartialState = {
    productsReducer: IProductListType;
  };

  let store: MockStoreEnhanced<PartialState, Dispatch<AnyAction>>;
  const mockStore = configureStore<PartialState>(middlewares);

  beforeEach(() => {
    store = mockStore({
      productsReducer: {
        products,
        types: [],
      },
    });
  });
  it('should create catalog with products', () => {
    const component = render(
      <Provider store={store}>
        <Catalog />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
