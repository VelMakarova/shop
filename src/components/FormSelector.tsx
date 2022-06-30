import React from 'react';
import { Button } from './Button';
import { paths } from '../paths';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  button {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-transform: uppercase;
  text-decoration: underline;
`;

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
