import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toggleTheme } from '../store/reducer';
import { RootState } from '../store';

const StyledHeader = styled.header`
  height: 70px;
  width: 100%;
  border-bottom: 1px solid ${(props) => (props.theme === 'light' ? 'white' : 'black')};
`;
export function Header() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state);
  return (
    <StyledHeader theme={theme}>
      <label htmlFor="toggler">
        <input type="checkbox" name="toggler" id="toggler" onChange={() => dispatch(toggleTheme())} />
        header
      </label>
    </StyledHeader>
  );
}
