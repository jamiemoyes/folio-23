import './Menu.css';
import { useEffect } from 'react';
import { animate, spring, stagger } from 'motion';

const pages = [
  { title: 'Home', identifier: '#home' },
  { title: 'About Me', identifier: '#about-me' },
  { title: 'Work', identifier: '#work' },
  { title: 'Projects', identifier: '#projects' }
];

interface menuProps {
  isOpen: boolean;
  setIsOpen: Function;
}

const PopulatedMenu = ({ isOpen, setIsOpen, ...rest }: menuProps) => {
  function toggleVisible() {
    !isOpen && setIsOpen(true);
  }

  useEffect(() => {
    if (isOpen) {
      animate('.menu-item', { display: 'block' });

      animate('.nav-menu', { width: 'auto' }, { easing: 'ease-in-out', duration: 0.4 });
      animate('.menu-item', { opacity: 1, x: 0 }, { delay: stagger(0.1), easing: spring() });
    } else {
      animate('.nav-menu', { width: '2rem' }, { easing: 'ease-in-out', duration: 1 });
      animate(
        '.menu-item',
        { x: '-60px', opacity: 0 },
        { delay: stagger(0.1, { from: 'last' }), easing: spring() }
      );
      animate('.menu-item', { display: 'none' });
    }
  }, [isOpen]);

  return (
    <div className={`nav-menu ${!isOpen && 'hidden'}`} onClick={toggleVisible} {...rest}>
      {pages.map(({ title, identifier }) => (
        <a className={`menu-item ${!isOpen && 'hidden'}`} href={identifier}>
          <h3>{title}</h3>
        </a>
      ))}
    </div>
  );
};

export { PopulatedMenu };
