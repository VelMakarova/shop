import React from 'react';
import { StyledButton } from './StyledButton';

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  type?: 'button' | 'reset' | 'submit';
  className?: string;
  reversed?: boolean;
  textBtn?: boolean;
  outlinedBtn?: boolean;
  size?: 's' | 'm' | 'l' | 'block';
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  type = 'button',
  className,
  reversed,
  textBtn,
  outlinedBtn,
  size = 'm',
}) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      className={className}
      reversed={reversed}
      textBtn={textBtn}
      outlinedBtn={outlinedBtn}
      size={size}
    >
      {label}
    </StyledButton>
  );
};
