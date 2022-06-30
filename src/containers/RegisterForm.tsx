import React, { useState } from 'react';
import { Input, Button } from '../components';
import { StyledLoginForm } from './LoginForm';
import { useNavigate } from 'react-router-dom';

interface RegisterFormShape {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const formInitial: RegisterFormShape = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const RegisterForm: React.FC = () => {
  const [formValue, changeFormValue] = useState(formInitial);
  const navigate = useNavigate();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { name, value } = target;
    changeFormValue({ ...formValue, [name]: value });
  };

  const formSubmitHandler = () => {
    navigate('/', { state: { isLoggedIn: true } });
  };

  return (
    <StyledLoginForm onSubmit={formSubmitHandler}>
      <Input name="firstName" onChange={inputHandler} placeholder="first name" value={formValue.firstName} />
      <Input name="lastName" onChange={inputHandler} placeholder="last name" value={formValue.lastName} />
      <Input name="email" onChange={inputHandler} placeholder="email" value={formValue.email} />
      <Input name="password" onChange={inputHandler} placeholder="password" value={formValue.password} />
      <Button type="submit" label="sign up" />
    </StyledLoginForm>
  );
};
