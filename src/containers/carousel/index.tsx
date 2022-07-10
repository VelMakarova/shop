import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StyledCarousel, StyledCarouselTitle } from './carousel.styled';
import { LeftArrow, RightArrow, Card } from '../../components';
import { useAppSelector } from '../../hooks';

export const Carousel: React.FC<{ title: string }> = ({ title }) => {
  const { products } = useAppSelector((state) => state);
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <RightArrow className="right-arrow" />,
    prevArrow: <LeftArrow className="left-arrow" />,
  };

  return (
    <StyledCarousel className="carousel">
      <StyledCarouselTitle>{title}</StyledCarouselTitle>
      <Slider {...settings}>
        {products?.map((product, i) => {
          return <Card key={i} product={product} />;
        })}
      </Slider>
    </StyledCarousel>
  );
};
