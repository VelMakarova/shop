import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: #f8ff2f;
    color: black;
    font-size: 18px;
    padding: 10px 15px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
`;

interface ButtonProps {
    clickHandler: () => void
    label: string
    type?: 'button' | 'reset' | 'submit'
}

export function Button({ clickHandler, label, type }: ButtonProps) {
  return (
    <StyledButton onClick={clickHandler} type={type}>
      {label}
    </StyledButton>
  );
}

Button.defaultProps = {
  type: 'button',
};
