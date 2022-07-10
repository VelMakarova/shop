import React from 'react';
import { StyledLoaderContainer, StyledLoaderSpinner } from './loader.styled';

export const Loader: React.FC = () => {
  return (
    <StyledLoaderContainer className="loader">
      <StyledLoaderSpinner />
    </StyledLoaderContainer>
  );
};
