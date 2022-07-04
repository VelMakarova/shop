import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
`;

export const StyledLink = styled(NavLink)`
  font-size: 16px;
  text-decoration: none;
  color: inherit;
  &:not(:last-child) {
    margin-right: 30px;
  }
  &.active {
    font-weight: bold;
  }
`;
