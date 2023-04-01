import { ICartItem } from '../../../models/ICartItem';

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
  type: 'minus' | 'plus';
}
