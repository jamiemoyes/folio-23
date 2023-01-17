import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement, ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { PopulatedMenu } from './Menu';

const mockSetIsOpen = vi.fn();

const getMockProps = () => ({
  isOpen: true,
  setIsOpen: mockSetIsOpen
});

const setup = (jsx: ReactElement) => ({
  user: userEvent.setup(),
  ...render(jsx)
});

describe('<PopulatedMenu /> ', () => {
  it('expands menu on click', () => {
    setup(<PopulatedMenu {...getMockProps()} />);
    screen.debug();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
