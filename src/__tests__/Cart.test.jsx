import { render, screen } from '@testing-library/react';
import Cart from '../components/Cart/Cart';

describe('Cart', () => {
  it('should render the count and total props', () => {
    const count = 3;
    const total = 1500;

    render(<Cart count={count} total={total} variant="large" />);

    const countElement = screen.getByText(`${count}`);
    const totalElement = screen.getByText(`${total} ₸`);

    expect(countElement).toBeInTheDocument();
    expect(totalElement).toBeInTheDocument();
  });
});
