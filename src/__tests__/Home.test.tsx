import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home', () => {
  it('should have headline', () => {
    render(<Home />);
    expect(screen.getByTestId('page-title')).toHaveTextContent(/Главная/i);
  });
});
