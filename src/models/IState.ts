import { IProduct } from "./IProduct";
import { ICartItem } from "./ICardItem";

export interface IState {
  productList: IProduct[];
  cartList: ICartItem[];
  totalCount: number;
  totalPrice: number;
}