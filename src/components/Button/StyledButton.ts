import styled from 'styled-components';

interface StyledBtnProps {
  className?: string;
  reversed?: boolean;
  textBtn?: boolean;
  outlinedBtn?: boolean;
  size?: 's' | 'm' | 'l' | 'block';
}

const getBtnBg = (props: StyledBtnProps) => {
  switch (true) {
    case props.textBtn:
      return 'transparent';
    case props.reversed:
      return '#000';
    default:
      return '#f8ff2f';
  }
};

const getBtnColor = (props: StyledBtnProps) => {
  switch (true) {
    case props.textBtn && props.reversed:
      return '#fff';
    case props.textBtn && !props.reversed:
      return '#000';
    case !props.textBtn && props.reversed:
      return '#f8ff2f';
    default:
      return '#000';
  }
};

export const StyledButton = styled.button<StyledBtnProps>`
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
