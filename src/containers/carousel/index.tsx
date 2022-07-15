import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StyledCarousel, StyledCarouselTitle } from './carousel.styled';

export const Carousel: React.FC<{ title: string; children: JSX.Element }> = ({ title, children }) => {
  return (
    <StyledCarousel className="carousel">
      <StyledCarouselTitle>{title}</StyledCarouselTitle>
      {children}
    </StyledCarousel>
  );
};
