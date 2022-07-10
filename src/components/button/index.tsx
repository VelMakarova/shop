import React from 'react';
import { StyledButton } from './button.styled';
import { ThemeProvider } from 'styled-components';
import {
  buttonTheme,
  inversedBtnTheme,
  outlinedBtnTheme,
  outlinedInversedBtnTheme,
  textBtnTheme,
  inversedTextBtnTheme,
} from './button.styled';

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  type?: 'button' | 'reset' | 'submit';
  className?: string;
  isInversed?: boolean;
  isOutlined?: boolean;
  isTextBtn?: boolean;
  size?: 's' | 'm' | 'l';
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  type = 'button',
  className,
  isInversed,
  isOutlined,
  isTextBtn,
  size = 'm',
}) => {
  const theme = () => {
    switch (true) {
      case isInversed:
        return inversedBtnTheme;
      case isOutlined:
        return outlinedBtnTheme;
      case isInversed && isOutlined:
        return outlinedInversedBtnTheme;
      case isTextBtn:
        return textBtnTheme;
      case isTextBtn && isInversed:
        return inversedTextBtnTheme;
      default:
        return buttonTheme;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledButton
        onClick={onClick}
        type={type}
        className={className}
        isInversed={isInversed}
        isTextBtn={isTextBtn}
        isOutlined={isOutlined}
        size={size}
      >
        {text}
      </StyledButton>
    </ThemeProvider>
  );
};
