import React from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../hooks';
import { toggleTheme } from '../store/themeReducer';

const StyledHeader = styled.header`
    height: 70px;
    width: 100%;
    border-bottom: 1px solid
        ${(props) => (props.theme === 'light' ? 'white' : 'black')};
`;
export function Header() {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state);
  return (
    <StyledHeader theme={theme}>
      <label htmlFor="toggler">
        <input
          type="checkbox"
          name="toggler"
          id="toggler"
          onChange={() => dispatch(toggleTheme())}
        />
        header
      </label>
    </StyledHeader>
  );
}
