import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Button from '../components/Button/Button';

describe('Button', () => {
  it('should render correctly with text', () => {
    render(<Button text="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should render correctly with an image', () => {
    render(<Button img="catalog" />);
    expect(screen.getByAltText('catalogIcon')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button text="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
