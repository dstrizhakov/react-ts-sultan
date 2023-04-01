import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productAPI } from '../services/ProductService';
import cartReducer from './reducers/Cart/cart.slice';
import userReducer from './reducers/User/user.slice';
import productReducer from './reducers/Products/products.slice';
import filtersReducer from './reducers/Filters/filters.slice';

const rootReducer = combineReducers({
  cartReducer,
  userReducer,
  filtersReducer,
  productReducer,
  [productAPI.reducerPath]: productAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
