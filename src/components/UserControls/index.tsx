import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { StyledControls } from './StyledUserControls';
import { logout } from '../../store/login/loginReducer';
import { useAppDispatch } from '../../hooks';

export const UserControls: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useNavigate();
  const clickHandler = () => {
    dispatch(logout());
    history('/login');
  };
  return (
    <StyledControls className="user-controls">
      <Button label="log out" onClick={clickHandler} />
    </StyledControls>
  );
};
