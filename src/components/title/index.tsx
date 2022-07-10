import React from 'react';
import { StyledTitle } from './title.styled';

interface TitleProps {
  title: string;
}

export const Title: React.FC<TitleProps> = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};
