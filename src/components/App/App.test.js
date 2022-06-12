import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '../../Redux/store';
import { App } from './App';

describe('App component', () => {
  it('App renders', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('todos')).toBeInTheDocument();
  });
});
