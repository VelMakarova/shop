import React from 'react';
import Slider from 'react-slick';
import { Carousel } from '../../containers';
import { RightArrow } from '../arrows/RightArrow';
import { LeftArrow } from '../arrows/LeftArrow';
import { categoriesSlides } from '../../mock/mockFilters';
import { CategorySlide } from '../category-slide';

export const CategoryCarousel = () => {
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <RightArrow className="right-arrow" />,
    prevArrow: <LeftArrow className="left-arrow" />,
  };
  return (
    <Carousel title="categories">
      <Slider {...settings}>
        {categoriesSlides?.map((item, i) => {
          return <CategorySlide key={i} content={item} />;
        })}
      </Slider>
    </Carousel>
  );
};
