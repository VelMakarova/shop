import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paths } from '../paths';
import blackLogo from '../assets/logo.svg';
import whiteLogo from '../assets/logo_white.svg';

const StyledLogo = styled(Link)`
  flex: 0 0 auto;
  text-align: center;
`;

interface LogoProps {
  isWhite?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ isWhite }) => {
  return (
    <StyledLogo to={paths.INDEX}>
      <img src={isWhite ? whiteLogo : blackLogo} alt="logo" />
    </StyledLogo>
  );
};
