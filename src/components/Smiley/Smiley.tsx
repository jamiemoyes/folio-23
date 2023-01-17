import { useEffect } from 'react';
import './Smiley.css';
import { Square } from '../../shapes/Square';
import { animate, stagger, spring } from 'motion';

const squareIndexes = [
  19, 28, 34, 35, 36, 43, 44, 45, 51, 60, 80, 81, 94, 95, 97, 98, 109, 110, 114, 115, 124, 125, 131,
  132, 133, 134, 135, 136, 137, 138, 139, 140, 148, 149, 150, 151, 152, 153, 154, 155
];

// const deductedIndexes = squareIndexes.map((i) => i - 1);

const Smiley = () => {
  useEffect(() => {
    animate(
      '.animate-square',
      { opacity: 1, height: '2rem' },
      { delay: stagger(0.05), easing: spring() }
    );
  }, []);

  return (
    <div className="smiley-container">
      <div className="smiley">
        {[...Array(160).keys()].map((_, idx) =>
          squareIndexes.includes(idx) ? <Square id={String(idx)} animate /> : <div />
        )}
      </div>
    </div>
  );
};

export { Smiley };
