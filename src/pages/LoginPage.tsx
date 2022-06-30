import React, { useState } from 'react';
import styled from 'styled-components';
import { LoginForm, RegisterForm } from '../containers';
import { FormSelector } from '../components';
import bg from '../assets/background.jpg';

interface LoginPageProps {
  showRegister?: boolean;
}

const StyledLoginContainer = styled.div<{ showLoginForm: boolean; showRegisterForm: boolean }>`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  ${(props) => !props.showLoginForm && !props.showRegisterForm && `background-image: url(${bg});`}
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const LoginPage: React.FC<LoginPageProps> = ({ showRegister = false }) => {
  const [showLoginForm, toggleLoginForm] = useState(false);

  return (
    <StyledLoginContainer showLoginForm={showLoginForm} showRegisterForm={showRegister}>
      {showRegister && <RegisterForm />}
      {!showRegister && showLoginForm && <LoginForm />}
      {!showRegister && !showLoginForm && <FormSelector toggleForm={toggleLoginForm} />}
    </StyledLoginContainer>
  );
};
