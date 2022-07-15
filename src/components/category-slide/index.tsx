import React from 'react';
import { Button } from '../button';
import { StyledSlide, StyledTitle } from './category-slide.styled';
import { useNavigate } from 'react-router-dom';
import { setCategory } from '../../store/filter/filter.slice';
import { paths } from '../../paths';
import { useAppDispatch } from '../../hooks';

interface CategorySlideType {
  name: string;
  img: string;
  link: string;
}

export const CategorySlide: React.FC<{ content: CategorySlideType }> = ({ content }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const clickHandler = () => {
    dispatch(setCategory(content.name));
    navigate(paths.CATALOG, { state: { filter: 'category' } });
  };

  return (
    <StyledSlide src={content.img}>
      <StyledTitle>{content.name}</StyledTitle>
      <Button text="go to category" onClick={clickHandler} isInversed className="category-btn" />
    </StyledSlide>
  );
};
