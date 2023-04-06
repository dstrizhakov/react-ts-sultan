import { render, fireEvent, screen } from '@testing-library/react';
import Burger from '../components/Burger/Burger';

describe('Burger', () => {
  it('should toggle menu on burger click', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 768,
    });
    window.dispatchEvent(new Event('resize'));

    const element = render(<Burger />);

    // Проверяем, что меню изначально скрыто
    expect(element.queryByTestId('burger-menu')).toBeNull();

    // Кликаем на бургер
    fireEvent.click(screen.getByTestId('burger-button'));

    // Проверяем, что меню стало видимым
    expect(element.queryByTestId('burger-menu')).toBeInTheDocument();

    // Кликаем на бургер ещё раз
    fireEvent.click(screen.getByTestId('burger-button'));

    // Проверяем, что меню скрылось
    expect(element.queryByTestId('burger-menu')).toBeNull();
  });
});
