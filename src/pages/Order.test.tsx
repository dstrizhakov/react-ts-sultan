import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ICart } from '../models/ICart';
import { Dispatch, AnyAction } from 'redux';
import Order from './Order';

const middlewares = [thunk];

describe('Order', () => {
  type PartialState = {
    cartReducer: ICart;
  };

  let store: MockStoreEnhanced<PartialState, Dispatch<AnyAction>>;
  const mockStore = configureStore<PartialState>(middlewares);

  beforeEach(() => {
    store = mockStore({
      cartReducer: {
        cartList: [
          {
            id: 1,
            product: {
              id: 1,
              img: 'https://ir.ozone.ru/multimedia/wc1000/1023617947.jpg',
              title: 'Порошок стиральный Posh One White',
              valueType: 'weight',
              value: '2000 г',
              barcode: '4604049097548',
              manufacturer: 'Нэфис',
              brand: 'Pos',
              description:
                'Основные свойства: - концентрированный стиральный порошок для эффективной стирки белого белья; - адаптирован для стирки детского белья (не содержит эко-токсичных компонентов и нерастворимых наполнителей (цеолитов); - без фосфатов, без сульфанолов, без хлора, без оптических отбеливателей; - содержит кислородный эко-отбеливатель TOTAL OXYGEN®;',
              type: ['Стиральный порошок'],
              price: 200,
            },
            count: 1,
          },
          {
            id: 2,
            product: {
              id: 2,
              img: 'https://ir.ozone.ru/s3/multimedia-q/wc1000/6101729258.jpg',
              title: 'Стиральный порошок Аквапудра Color, автомат',
              valueType: 'volume',
              value: '450 мл',
              barcode: '4604049097549',
              manufacturer: 'Ariel',
              brand: 'Ariel',
              description:
                'Безупречная чистота и приятный аромат одежды дарят прекрасное настроение и уверенность в себе, поэтому очень важно уделять должное внимание стирке. Именно для этого мы создали стиральный порошок Ariel Аквапудра для цветного белья. Ariel Аквапудра растворяется, едва коснувшись воды, и моментально активируется: удаляет трудновыводимые пятна, глубоко проникая в структуру волокон, и не дает загрязнениям въедаться. Порошок устраняет загрязнения, вызывающие неприятные запахи, такие как запах пота и тела, придавая одежде приятный аромат и сияющую чистоту даже на воротничках и манжетах рубашек.',
              type: ['Стиральный порошок'],
              price: 120,
            },
            count: 2,
          },
        ],
        totalPrice: 440,
        totalCount: 2,
      },
    });
  });

  it('should display the total price of items in the cart', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Order />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByTestId('cart-total')).toHaveTextContent(/440/i);
  });
});
