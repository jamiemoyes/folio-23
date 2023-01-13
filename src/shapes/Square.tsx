import './Square.css';

interface props {
  id: string;
  animate?: boolean;
  clickable?: boolean;
  isOpen?: boolean;
  onClick?: Function;
}

const Square = ({ id, animate = true, clickable = false, isOpen, onClick, ...rest }: props) => {
  const isClickable = clickable && isOpen;
  return (
    <div
      id={String(id)}
      className={`square ${animate ? `animate-square` : ''} ${isClickable && 'clickable'}`}
      onClick={isClickable ? onClick : () => {}}
      {...rest}
    />
  );
};

export { Square };
