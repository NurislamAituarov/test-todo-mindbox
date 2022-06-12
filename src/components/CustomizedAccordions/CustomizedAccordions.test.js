import { render, screen } from '@testing-library/react';

import { CustomizedAccordions } from './';

describe('CustomizedAccordions component', () => {
  it('CustomizedAccordions renders', () => {
    render(<CustomizedAccordions />);

    expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
    expect(screen.queryByTestId('list-item')).not.toBeInTheDocument();
  });
});

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(() => Promise.resolve([{ id: 1, username: 'foo' }])),
}));
