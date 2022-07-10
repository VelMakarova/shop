import React, { useState } from 'react';
import { LoginForm, RegisterForm, Header } from '../../containers';
import { FormSelector } from '../../components';
import { StyledLoginContainer, StyledLoginPage } from './login-page.styled';

interface LoginPageProps {
  showRegister?: boolean;
}

export const LoginPage: React.FC<LoginPageProps> = ({ showRegister = false }) => {
  const [showLoginForm, toggleLoginForm] = useState(false);

  return (
    <StyledLoginPage showLoginForm={showLoginForm} showRegisterForm={showRegister}>
      <Header isLoggedIn={false} isCatalogPage={false} logoColor={!showRegister && !showLoginForm ? '#fff' : '#f8ff2f'} />
      <StyledLoginContainer>
        {showRegister && <RegisterForm />}
        {!showRegister && showLoginForm && <LoginForm />}
        {!showRegister && !showLoginForm && <FormSelector toggleForm={toggleLoginForm} />}
      </StyledLoginContainer>
    </StyledLoginPage>
  );
};
