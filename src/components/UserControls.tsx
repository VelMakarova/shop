import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';
import { login } from '../store/loginReducer';
import { useAppDispatch } from '../hooks';

const StyledControls = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const UserControls: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useNavigate();
  const clickHandler = () => {
    dispatch(login(''));
    history('/login');
  };
  return (
    <StyledControls>
      <Button label="log out" onClick={clickHandler} />
    </StyledControls>
  );
};
