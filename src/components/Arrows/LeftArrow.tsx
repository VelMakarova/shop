import React from 'react';
import { StyledLeftArrow } from './StyledArrows';
import ArrowType from './ArrowType';

export const LeftArrow: React.FC<ArrowType> = ({ color = '#fff', onClick, className }) => {
  return (
    <StyledLeftArrow onClick={onClick} className={className}>
      <svg width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18.4638 30.8267L24 34L24 27.6583L18.4638 24.485L5.39951 17L18.4638 9.51012L24 6.3417L24
        3.8147e-06L18.4638 3.17327L-2.04432e-06 13.7492L-2.05787e-06 13.9042L-2.59873e-06 20.0909L-2.6127e-06
        20.2508L18.4638 30.8267Z"
          fill={color}
        />
      </svg>
    </StyledLeftArrow>
  );
};
