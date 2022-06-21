import React from 'react';
import styled from 'styled-components';

interface InputProps {
    placeholder: string
    name: string
    value: string
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: 'text' | 'password'
}

const StyledInput = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #f8ff2f;
    text-transform: uppercase;
    font-size: 18px;
    color: white;
    padding: 10px 0;
    margin-bottom: 30px;
`;

export function Input({
  placeholder,
  name,
  value,
  changeHandler,
  type,
}: InputProps) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={changeHandler}
    />
  );
}

Input.defaultProps = {
  type: 'text',
};
