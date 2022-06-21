import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button } from '../components';
import { StyledLoginForm } from './LoginForm';

interface RegisterFormShape {
    firstName: string
    lastName: string
    email: string
    password: string
}

const formInitial: RegisterFormShape = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export function RegisterForm() {
  const [formValue, changeFormValue] = useState(formInitial);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { name, value } = target;
    changeFormValue({ ...formValue, [name]: value });
  };

  return (
    <StyledLoginForm>
      <Input
        name="firstName"
        changeHandler={inputHandler}
        placeholder="first name"
        value={formValue.firstName}
      />
      <Input
        name="lastName"
        changeHandler={inputHandler}
        placeholder="last name"
        value={formValue.lastName}
      />
      <Input
        name="email"
        changeHandler={inputHandler}
        placeholder="email"
        value={formValue.email}
      />
      <Input
        name="password"
        changeHandler={inputHandler}
        placeholder="password"
        value={formValue.password}
      />
      <Button clickHandler={() => {}} label="sign up" />
    </StyledLoginForm>
  );
}
