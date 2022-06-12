import { render, screen, fireEvent } from '@testing-library/react';

import { InputCreate } from '.';

describe('InputCreate component', () => {
  it('InputCreate renders', () => {
    render(<InputCreate />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).not.toHaveFocus();
    expect(screen.getByPlaceholderText(/What needs to be done?/i)).toBeInTheDocument();
  });
});

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(() => Promise.resolve([{ id: 1, username: 'foo' }])),
}));
