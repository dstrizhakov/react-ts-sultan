import { ICartItem } from './ICartItem';

export interface ICart {
  cartList: ICartItem[];
  totalCount: number;
  totalPrice: number;
}
