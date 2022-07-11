import React from 'react';
import { StyledControls, StyledControl } from './user-controls.styled';
import { useAppDispatch } from '../../hooks';
import { showCart } from '../../store/cart-visibility/cart-visibility.reducer';

export const UserControls: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <StyledControls className="user-controls">
      <StyledControl>
        <button onClick={() => dispatch(showCart())}>
          <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.16397 7.45783H5.58322H6.16389H12.8017H13.3821H13.8017H14.3821H17.9655V23.0817C17.9655 23.5952
            17.549 24 17.0689 24H1.89664C1.41645 24 1 23.5952 1 23.0817V7.45783H4.58322H5.16397Z"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </button>
      </StyledControl>
    </StyledControls>
  );
};
