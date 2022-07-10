import React from 'react';
import { StyledError, StyledLink } from './error.styled';
import { paths } from '../../paths';

const ErrorPage = () => {
  return (
    <StyledError>
      <span>404</span>
      <StyledLink to={paths.INDEX}>go to main</StyledLink>
    </StyledError>
  );
};

export default ErrorPage;
