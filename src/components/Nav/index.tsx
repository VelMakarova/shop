import React from 'react';
import { StyledLink, StyledNav } from './StyledNav';
import { paths } from '../../paths';

export const Nav: React.FC = () => {
  return (
    <StyledNav className="nav">
      <StyledLink to={paths.CATALOG}>Man</StyledLink>
      <StyledLink to={paths.CATALOG}>Woman</StyledLink>
      <StyledLink to={paths.CATALOG}>Kids</StyledLink>
    </StyledNav>
  );
};
