import React from 'react';
import { StyledLanding } from './StyledLanding';
import { Header } from '../../containers';

export const Landing: React.FC = () => {
  return (
    <StyledLanding>
      <Header isLoggedIn={true} isCatalogPage={false} logoColor="#fff" />
      <div>Banner</div>
      <div>Carousel</div>
    </StyledLanding>
  );
};
