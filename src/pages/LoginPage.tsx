import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LoginForm, RegisterForm } from '../containers';
import { Button } from '../components';

const StyledLoginContainer = styled.div`
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

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

interface LoginPageProps {
    showRegister?: boolean
}

export function LoginPage({ showRegister }: LoginPageProps) {
  const [showLoginForm, toggleLoginForm] = useState(false);

  const selectForm = (
    <StyledForm>
      <Button
        clickHandler={() => toggleLoginForm(true)}
        label="Sign in"
      />
      <StyledLink to="/signup">Register</StyledLink>
    </StyledForm>
  );

  const renderForm = () => {
    if (!showRegister) {
      return showLoginForm ? <LoginForm /> : selectForm;
    }
    return <RegisterForm />;
  };

  return <StyledLoginContainer>{renderForm()}</StyledLoginContainer>;
}

LoginPage.defaultProps = {
  showRegister: false,
};
