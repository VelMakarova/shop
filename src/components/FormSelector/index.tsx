import React from 'react';
import { StyledLink, StyledForm } from './StyledFormSelector';
import { Button } from '../Button';
import { paths } from '../../paths';

interface toggleFormProps {
  toggleForm: (arg: boolean) => void;
}

export const FormSelector: React.FC<toggleFormProps> = ({ toggleForm }) => {
  return (
    <StyledForm>
      <Button onClick={() => toggleForm(true)} label="Sign in" />
      <StyledLink to={paths.REGISTER}>Register</StyledLink>
    </StyledForm>
  );
};
