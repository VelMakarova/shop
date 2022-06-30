import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  white-space: nowrap;
  font-size: 100px;
  text-align: center;
  font-weight: 500;
  margin: 15px 0;
`;

interface TitleProps {
  title: string;
}

export const CategoryTitle: React.FC<TitleProps> = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};
