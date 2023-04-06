import { render, screen } from '@testing-library/react';
import BackButton from '../components/BackButton/BackButton';
import { MemoryRouter } from 'react-router-dom';

describe('BackButton', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <BackButton />
      </MemoryRouter>
    );

    expect(screen.getByText('Назад')).toBeInTheDocument();
  });
});
