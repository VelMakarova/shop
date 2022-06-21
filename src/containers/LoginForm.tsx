import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button } from '../components';
import { useAppDispatch } from '../hooks';
import { login } from '../store/loginReducer';

export const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 320px;
    button {
        width: 100%;
    }
`;

interface LoginFormShape {
    email: ''
    password: ''
}

const formInitial: LoginFormShape = {
  email: '',
  password: '',
};

export function LoginForm() {
  const [formValue, changeFormValue] = useState(formInitial);
  const dispatch = useAppDispatch();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { name, value } = target;
    changeFormValue({ ...formValue, [name]: value });
  };

  const signInHandler = () => {
    const mockToken = String(Date.now());
    dispatch(login(mockToken));
  };
  return (
    <StyledLoginForm>
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
      <Button
        clickHandler={signInHandler}
        label="sign in"
        type="submit"
      />
    </StyledLoginForm>
  );
}
