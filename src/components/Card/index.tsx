import React from 'react';
import { StyledCard, StyledCardPrice, StyledImage, StyledCardTitle, StyledCardFooter, StyledImgWrapper } from './StyledCard';
import { Button } from '../Button';

export interface ProductType {
  id: number;
  title: string;
  price: string;
  img: string;
}

interface CardProps {
  product: ProductType;
}

export const Card: React.FC<CardProps> = ({ product }) => {
  const clickHandler = () => {
    console.log(1);
  };
  return (
    <StyledCard className="card">
      <Button onClick={clickHandler} label={'Add to bag'} className="card-button" reversed />
      <StyledImgWrapper>
        <StyledImage src={product.img} alt="product image" />
      </StyledImgWrapper>
      <StyledCardFooter>
        <StyledCardTitle>{product.title}</StyledCardTitle>
        <StyledCardPrice>{product.price}</StyledCardPrice>
      </StyledCardFooter>
    </StyledCard>
  );
};
