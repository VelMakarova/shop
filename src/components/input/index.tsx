import React from 'react';
import { StyledInput } from './input.styled';

interface InputProps {
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password';
}

export const Input: React.FC<InputProps> = ({ placeholder, name, value, onChange, type = 'text' }) => (
  <StyledInput type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} />
);
