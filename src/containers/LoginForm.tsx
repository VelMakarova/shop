import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from '../components';
import { useAppDispatch } from '../hooks';
import { login } from '../store/loginReducer';

interface LoginFormShape {
  email: '';
  password: '';
}

const formInitial: LoginFormShape = {
  email: '',
  password: '',
};

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  button {
    width: 100%;
  }
`;

export const LoginForm: React.FC = () => {
  const [formValue, changeFormValue] = useState(formInitial);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // add formik?
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { name, value } = target;
    changeFormValue({ ...formValue, [name]: value });
  };

  const signInHandler = () => {
    const mockToken = String(Date.now());
    dispatch(login(mockToken));
    navigate('/', { replace: true, state: { isLoggedIn: true } });
  };

  return (
    <StyledLoginForm>
      <Input name="email" onChange={inputHandler} placeholder="email" value={formValue.email} />
      <Input name="password" onChange={inputHandler} placeholder="password" value={formValue.password} />
      <Button onClick={signInHandler} label="sign in" type="submit" />
    </StyledLoginForm>
  );
};
