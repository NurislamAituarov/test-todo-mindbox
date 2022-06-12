import { render, screen } from '@testing-library/react';

import { ListItem } from './';

describe('ListItem component', () => {
  it('ListItem renders', () => {
    render(<ListItem el />);
  });
});

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(() => Promise.resolve([{ id: 1, username: 'foo' }])),
}));
