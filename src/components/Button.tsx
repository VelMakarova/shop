import React from 'react';
import styled from 'styled-components';

const getBtnBg = (props: StyledBtnProps) => {
  if (props.textButton) return 'transparent';
  if (props.reversed) return '#000';
  return '#f8ff2f';
};

const getBtnColor = (props: StyledBtnProps) => {
  if (props.textButton && props.reversed) return '#fff';
  if (props.textButton && !props.reversed) return '#000';
  if (!props.textButton && props.reversed) return '#f8ff2f';
  return '#000';
};

// const getBtnBg = (props: StyledBtnProps) => {
//   switch (props) {
//     case (props.textButton):
//       return 'transparent';
//     case (props.reversed):
//       return '#000';
//     default:
//       return '#f8ff2f'
//   }
// }
//
// const getBtnColor = (props: StyledBtnProps) => {
//   switch (props) {
//     case (props.textButton && props.reversed):
//       return '#fff';
//     case (props.textButton && !props.reversed):
//       return '#000';
//     case (!props.textButton && props.reversed):
//       return '#f8ff2f';
//     default: return '#000'
//   }
// }

const StyledButton = styled.button<StyledBtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => getBtnBg(props)};
  color: ${(props) => getBtnColor(props)};
  // add theme, sizes
  font-size: 18px;
  padding: 10px 15px;
  text-transform: uppercase;
  border: none;
  white-space: nowrap;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
  &.card-button {
    display: none;
    position: absolute;
    top: 60%;
    left: 20px;
    right: 20px;
  }
  .card:hover &.card-button {
    display: flex;
  }
`;

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  type?: 'button' | 'reset' | 'submit';
  className?: string;
  reversed?: boolean;
  textButton?: boolean;
}

interface StyledBtnProps {
  className?: string;
  reversed?: boolean;
  textButton?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ onClick, label, type = 'button', className, reversed, textButton }) => {
  return (
    <StyledButton onClick={onClick} type={type} className={className} reversed={reversed} textButton={textButton}>
      {label}
    </StyledButton>
  );
};
