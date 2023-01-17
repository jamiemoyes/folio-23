import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ReactElement } from 'react';
import { Square } from './Square';

const mockOnClick = vi.fn();

const getMockProps = () => ({
  id: '1',
  animate: true,
  clickable: true,
  isOpen: true,
  onClick: mockOnClick
});

function setup(jsx: ReactElement) {
  return {
    user: userEvent.setup(),
    ...render(jsx)
  };
}

describe('<Square />', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });
  it('renders correctly', async () => {
    const { user } = setup(<Square {...getMockProps()} />);

    const square = screen.getByTestId('square-1');
    await user.click(square);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('not clickable if clickable is false', async () => {
    const { user } = setup(<Square {...getMockProps()} clickable={false} />);

    const square = screen.getByTestId('square-1');
    await user.click(square);
    screen.debug();
    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });
});
