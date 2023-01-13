interface arrowProps {
  colour: string;
}

const BrushArrow = ({ colour }: arrowProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="52.1"
    preserveAspectRatio="xMidYMid meet"
    version="1.0"
    viewBox="11.1 12.4 113.7 52.1"
    width="113.7"
    zoomAndPan="magnify">
    <g id="change1_1">
      <path
        d="M124.26,33.18c-0.31-1.44-1.3-2.91-1.17-4.07c0.49-4.2-2.05-5.47-5.23-6.52 c-13.4-4.45-27.04-7.87-41.08-9.57c-5.02-0.61-6.26,0.74-5.15,5.67c0.14,0.61,0.37,1.2,0.54,1.81c0.55,2.05,2.08,2.99,3.97,2.64 c1.85-0.35,3.51,0.09,5.2,0.43c4.33,0.86,8.62,1.86,12.93,2.81c0.13,0.23,0.15,0.47,0.06,0.72c-4.65,0.4-9.29,0.95-13.94,1.16 c-11.93,0.53-23.65,3.39-35.72,2.83c-5.74-0.26-11.57,0.69-17.3,1.51c-4.51,0.65-9.08,0.31-13.54,1.26 c-2.27,0.48-2.69,1.06-1.35,2.91c2.66,3.7,5.44,7.38,10.95,6.19c0.97-0.21,2.01-0.1,3.02-0.21c9.41-0.95,18.85-1.48,28.28-2.08 c10.19-0.65,20.38-1.34,30.57-2.04c3.4-0.23,6.79-0.55,10.52-0.85c-1.04,1.67-2.39,2.16-3.5,2.92c-3.76,2.57-7.1,5.63-10.55,8.58 c-5.27,4.5-3.01,10.5-0.44,14.18c0.48,0.69,1.1,1.08,1.77,0.14c2.03-2.84,5.05-4.52,7.82-6.46c7.94-5.58,16.26-10.57,24.58-15.56 c2.16-1.3,4.33-2.58,6.5-3.84C123.77,36.72,124.79,35.61,124.26,33.18z M95.81,26.56c0.06-0.03,0.12-0.04,0.18-0.09 c-0.04,0.05-0.09,0.08-0.14,0.11C95.84,26.58,95.83,26.57,95.81,26.56z"
        fill={colour}
      />
    </g>
  </svg>
);

const ArrowIcon = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="white" {...props}>
    <path d="M24 38 12 26l2.1-2.1 9.9 9.9 9.9-9.9L36 26Zm0-12.65-12-12 2.1-2.1 9.9 9.9 9.9-9.9 2.1 2.1Z" />
  </svg>
);

export { BrushArrow, ArrowIcon };