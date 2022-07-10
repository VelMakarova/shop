import React from 'react';
import { StyledLink, StyledForm } from './form-selector.styled';
import { Button } from '../button';
import { paths } from '../../paths';

interface toggleFormProps {
  toggleForm: (arg: boolean) => void;
}

export const FormSelector: React.FC<toggleFormProps> = ({ toggleForm }) => {
  return (
    <StyledForm>
      <Button onClick={() => toggleForm(true)} text="Sign in" />
      <StyledLink to={paths.REGISTER}>Register</StyledLink>
    </StyledForm>
  );
};
