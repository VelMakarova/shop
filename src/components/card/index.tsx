import React from 'react';
import { StyledCard, StyledCardPrice, StyledImage, StyledCardTitle, StyledCardFooter, StyledImgWrapper } from './card.styled';
import { Button } from '../button';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../paths';
import { ProductType } from '../../types';

export const Card: React.FC<{ product: ProductType }> = ({ product }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`${paths.PRODUCT}/${product.id}`);
  };

  return (
    <StyledCard className="card">
      <Button onClick={clickHandler} text={'Add to bag'} className="card-button" isInversed />
      <StyledImgWrapper>
        <StyledImage src={product.img[0]} alt="product image" />
      </StyledImgWrapper>
      <StyledCardFooter>
        <StyledCardTitle>{product.title}</StyledCardTitle>
        <StyledCardPrice>{product.price}</StyledCardPrice>
      </StyledCardFooter>
    </StyledCard>
  );
};
