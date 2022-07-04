import React from 'react';
import { StyledLanding } from './StyledLanding';
import { Header, Carousel } from '../../containers';
import { Footer } from '../../components';

export const Landing: React.FC = () => {
  return (
    <StyledLanding>
      <Header isLoggedIn={true} isCatalogPage={false} logoColor="#fff" />
      <div>Banner</div>
      <Carousel />
      <Footer reversed />
    </StyledLanding>
  );
};
