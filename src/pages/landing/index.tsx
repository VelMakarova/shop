import React from 'react';
import { StyledLanding } from './landing.styled';
import { Header, Carousel } from '../../containers';
import { Banner, Footer } from '../../components';

export const Landing: React.FC = () => {
  return (
    <StyledLanding>
      <Header isLoggedIn={true} isCatalogPage={false} logoColor="#fff" />
      <section>
        <Banner />
      </section>
      <section>
        <Carousel title="Tranding now" />
      </section>
      <section>Lookbook</section>
      <section>
        <Carousel title="new arrivals" />
      </section>
      <section>collections</section>
      <section>about us</section>
      <section>subscribe</section>
      <Footer reversed />
    </StyledLanding>
  );
};
