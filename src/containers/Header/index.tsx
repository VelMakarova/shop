import React from 'react';
import { StyledHeader } from './StyledHeader';
import { Logo, Nav, UserControls } from '../../components';

export interface HeaderProps {
  isLoggedIn: boolean;
  isCatalogPage: boolean;
  logoColor?: string;
}

export const Header: React.FC<HeaderProps> = ({ isLoggedIn, isCatalogPage, logoColor = '#000' }) => {
  return (
    <StyledHeader isLoggedIn={isLoggedIn} isCatalogPage={isCatalogPage} logoColor={logoColor}>
      <Nav />
      <Logo color={logoColor} width={isCatalogPage ? '260' : '100%'} height={isCatalogPage && isLoggedIn ? '33' : '180'} />
      <UserControls />
    </StyledHeader>
  );
};
