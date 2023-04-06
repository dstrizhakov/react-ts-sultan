import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStore } from 'redux-mock-store';
import { setIsAdmin } from '../store/reducers/User/user.slice';
import SwitchAdmin from '../components/Admin/SwitchAdmin/SwitchAdmin';
import { AnyAction } from '@reduxjs/toolkit';

describe('SwitchAdmin', () => {
  const mockStore = configureStore([]);
  let store: MockStore<unknown, AnyAction>;

  beforeEach(() => {
    store = mockStore({
      user: { isAdmin: false },
    });
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <SwitchAdmin />
      </Provider>
    );
    expect(screen.getByLabelText('Админ')).toBeInTheDocument();
    expect(screen.getByLabelText('Админ')).not.toBeChecked();
  });

  it('should toggle the checkbox', () => {
    render(
      <Provider store={store}>
        <SwitchAdmin />
      </Provider>
    );

    const checkbox = screen.getByLabelText('Админ');

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(store.getActions()).toContainEqual(setIsAdmin(true));

    fireEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
    expect(store.getActions()).toContainEqual(setIsAdmin(false));
  });
});
