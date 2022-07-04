import React from 'react';
import { StyledLoaderContainer, StyledLoaderSpinner } from './StyledLoader';

export const Loader: React.FC = () => {
  return (
    <StyledLoaderContainer className="loader">
      <StyledLoaderSpinner />
    </StyledLoaderContainer>
  );
};
