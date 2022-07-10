import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledLoginForm } from './login-form.styled';
import { Input, Button } from '../../components';
import { useAppDispatch } from '../../hooks';
import { login } from '../../store/login/login.reducer';

interface LoginFormShape {
  email: string;
  password: string;
}

const formInitial: LoginFormShape = {
  email: '',
  password: '',
};

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
    dispatch(login());
    navigate('/', { replace: true, state: { isLoggedIn: true } });
  };

  return (
    <StyledLoginForm>
      <Input name="email" onChange={inputHandler} placeholder="email" value={formValue.email} />
      <Input name="password" onChange={inputHandler} placeholder="password" value={formValue.password} />
      <Button onClick={signInHandler} text="sign in" type="submit" />
    </StyledLoginForm>
  );
};
