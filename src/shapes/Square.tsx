import './Square.css';
import { MouseEventHandler } from 'react';

export interface SquareProps {
  id: string;
  animate?: boolean;
  clickable?: boolean;
  isOpen?: boolean;
  onClick?: MouseEventHandler;
}

const Square = ({
  id,
  animate = true,
  clickable = false,
  isOpen,
  onClick,
  ...rest
}: SquareProps) => {
  const isClickable = clickable && isOpen;
  return (
    <div
      id={String(id)}
      data-testid={`square-${id}`}
      className={`square ${animate ? `animate-square` : ''} ${isClickable ? 'clickable' : ''}`}
      onClick={
        isClickable
          ? onClick
          : () => {
              console.log('substitue');
            }
      }
      {...rest}
    />
  );
};

export { Square };
