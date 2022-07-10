import React from 'react';
import { StyledRightArrow } from './arrows.styled';
import ArrowType from './arrow.type';

export const RightArrow: React.FC<ArrowType> = ({ color = '#fff', onClick, className }) => {
  return (
    <StyledRightArrow onClick={onClick} className={className}>
      <svg width="23" height="34" viewBox="0 0 23 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.30553 3.17327L0 0V6.34169L5.30553 9.51496L17.8255 17L5.30553 24.4899L0 27.6583V34L5.30553
        30.8267L23 20.2508V20.0958V13.9091V13.7492L5.30553 3.17327Z"
          fill={color}
        />
      </svg>
    </StyledRightArrow>
  );
};
