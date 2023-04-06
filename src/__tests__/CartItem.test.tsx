import { render, fireEvent, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CartItem from '../components/CartItem/CartItem';
import { ICartItem } from '../models/ICartItem';
import productsData from '../../server/mock.json';
import { IProduct } from '../models/IProduct';
import * as reduxHooks from 'react-redux';

const products: IProduct[] = productsData.products;
const product = products[1];
const mockedCardItem: ICartItem = {
  id: 1,
  product,
  count: 3,
};

vi.mock('react-redux', async () => {
  const actual = await vi.importActual<typeof import('react-redux')>('react-redux');
  const mockDispatch = vi.fn();
  const mockSelector = vi.fn();
  return {
    __esModule: true,
    ...actual,
    useDispatch: () => mockDispatch,
    useSelector: () => mockSelector,
  };
});

const mockedDispatch = vi.spyOn(reduxHooks, 'useDispatch');

describe('CardItem', () => {
  it('render the item from props', () => {
    const component = render(<CartItem item={mockedCardItem} />);
    expect(component.getByTestId('product-title')).toHaveTextContent(mockedCardItem.product.title);
  });

  it('should dispatch actions', () => {
    const dispatch = vi.fn();
    mockedDispatch.mockReturnValue(dispatch);

    render(<CartItem item={mockedCardItem} />);
    fireEvent.click(screen.getByText('+'));
    expect(dispatch).toHaveBeenCalledWith({
      type: 'cart/changeCount',
      payload: { id: mockedCardItem.id, type: 'plus' },
    });
    fireEvent.click(screen.getByText('-'));
    expect(dispatch).toHaveBeenCalledWith({
      type: 'cart/changeCount',
      payload: { id: mockedCardItem.id, type: 'minus' },
    });
  });
});
