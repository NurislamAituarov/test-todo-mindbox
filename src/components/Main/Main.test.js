import { render, screen, fireEvent } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Provider } from 'react-redux';

import { Main } from './Main';
import { store } from '../../Redux/store';

describe('Main component', () => {
  it('Main renders', async () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>,
    );

    expect(screen.queryByText(/left/)).toBeNull();
    expect(screen.getAllByRole('button')).toHaveLength(5);
    fireEvent.click(screen.getByRole('button', { name: /All/i }));
    fireEvent.click(screen.getByRole('button', { name: /Active/i }));
    expect(screen.getByRole('button', { name: /clear completed/i })).toBeDisabled();
  });
});

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(() => Promise.resolve([{ id: 1, username: 'foo' }])),
}));
