import React from 'react';
import { StyledLanding } from './landing.styled';
import { Header } from '../../containers';
import { Banner, Footer } from '../../components';
import { CategoryCarousel } from '../../components/category-carousel';

export const Landing: React.FC = () => {
  return (
    <StyledLanding>
      <Header isLoggedIn={true} isCatalogPage={false} logoColor="#fff" />
      <section>
        <Banner />
      </section>
      <section>
        <CategoryCarousel />
      </section>
      <section>Lookbook</section>
      <section>carousel</section>
      <section>collections</section>
      <section>about us</section>
      <section>subscribe</section>
      <Footer reversed />
    </StyledLanding>
  );
};
