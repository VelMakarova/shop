import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
  display: flex;
`;

const StyledLink = styled(NavLink)`
  font-size: 16px;
  text-decoration: none;
  color: black;
  &:not(:last-child) {
    margin-right: 30px;
  }
  &.active {
    font-weight: bold;
  }
`;

export const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink to={'/'}>Man</StyledLink>
      <StyledLink to={'/woman'}>Woman</StyledLink>
      <StyledLink to={'/kids'}>Kids</StyledLink>
    </StyledNav>
  );
};
