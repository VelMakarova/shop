import React from 'react';
import styled from 'styled-components';
import { Logo, Nav, UserControls } from '../components';

const StyledHeader = styled.header`
  flex: 0 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 40px 50px;
`;

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Nav />
      <Logo />
      <UserControls />
    </StyledHeader>
  );
};
