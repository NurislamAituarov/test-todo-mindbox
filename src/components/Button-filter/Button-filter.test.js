import { render, screen } from '@testing-library/react';

import { ButtonFilter } from '.';

describe('ButtonFilter component', () => {
  it('ButtonFilter renders', () => {
    render(<ButtonFilter el onClick i />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(() => Promise.resolve([{ id: 1, username: 'foo' }])),
}));
