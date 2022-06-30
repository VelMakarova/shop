import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

export interface ProductType {
  id: number;
  title: string;
  price: string;
  img: string;
}

interface CardProps {
  product: ProductType;
}

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const StyledCardFooter = styled.div`
  flex: 0 0 auto;
  padding: 15px 0;
`;

const StyledCardTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const StyledCardPrice = styled.div`
  font-size: 14px;
`;

const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Card: React.FC<CardProps> = ({ product }) => {
  const clickHandler = () => {
    console.log(1);
  };
  return (
    <StyledCard className="card">
      <Button onClick={clickHandler} label={'Add to bag'} className="card-button" reversed />
      <StyledImage src={product.img} alt="product image" />
      <StyledCardFooter>
        <StyledCardTitle>{product.title}</StyledCardTitle>
        <StyledCardPrice>{product.price}</StyledCardPrice>
      </StyledCardFooter>
    </StyledCard>
  );
};
