import React, { useState } from 'react';
import { Input, Button } from '../../components';
import { StyledLoginForm } from '../login-form/login-form.styled';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../paths';
import { RegisterForm as RegisterFormShape } from '../../types';

const formInitial: RegisterFormShape = {
  id: '',
  firstName: '',
  lastName: '',
  login: '',
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
    navigate(paths.INDEX, { state: { isLoggedIn: true } });
  };

  return (
    <StyledLoginForm onSubmit={formSubmitHandler}>
      <Input name="firstName" onChange={inputHandler} placeholder="first name" value={formValue.firstName} />
      <Input name="lastName" onChange={inputHandler} placeholder="last name" value={formValue.lastName} />
      <Input name="email" onChange={inputHandler} placeholder="email" value={formValue.login} />
      <Input name="password" onChange={inputHandler} placeholder="password" value={formValue.password} />
      <Button type="submit" text="sign up" />
    </StyledLoginForm>
  );
};
