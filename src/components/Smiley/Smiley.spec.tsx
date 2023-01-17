import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { animate, stagger, spring } from 'motion';
import { Smiley } from './Smiley';
import { Square } from '../../shapes/Square';

vi.mock('motion', async (importOriginal) => {
  const mod = await importOriginal<any>();
  return {
    ...mod,
    animate: vi.fn()
  };
});

vi.mock('../../shapes/Square', () => ({
  Square: vi.fn()
}));

describe('<Smiley />', () => {
  function renderComponent() {
    return render(<Smiley />);
  }
  it('renders correctly', () => {
    renderComponent();
    expect(Square).toHaveBeenCalledTimes(40);
    // expect(animate).toHaveBeenCalledWith(
    //   '.animate-square',
    //   { opacity: 1, height: '2rem' },
    //   { delay: stagger(0.05), easing: spring() }
    // );
    expect(animate).toHaveBeenCalled();
  });
});
