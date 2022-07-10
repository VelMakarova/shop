import styled from 'styled-components';

interface StyledBtnProps {
  className?: string;
  isInversed?: boolean;
  isTextBtn?: boolean;
  isOutlined?: boolean;
  size?: 's' | 'm' | 'l';
}

const getFontSize = (size: string) => {
  if (size === 's') {
    return '16px';
  } else if (size === 'l') {
    return '48px';
  }
  return '20px';
};

export const StyledButton = styled.button<StyledBtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  padding: 16px 20px;
  width: 100%;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
  border: ${(props) => props.theme.border};
  font-size: ${(props) => getFontSize(props.size || 'm')};
  &:disabled {
    cursor: default;
  }
  &.card-button {
    display: none;
    position: absolute;
    top: 60%;
    left: 20px;
    right: 20px;
    width: auto;
    z-index: 1;
  }
  .card:hover &.card-button {
    display: flex;
  }
  &.monochrome {
    background-color: black;
    color: white;
    padding: 10px 20px;
    border-color: black;
    width: auto;
  }
`;

export const buttonTheme = {
  color: '#000',
  backgroundColor: '#f8ff2f',
  border: '1px solid #f8ff2f',
};
export const inversedBtnTheme = {
  color: '#f8ff2f',
  backgroundColor: '#000',
  border: '1px solid #000',
};

export const outlinedBtnTheme = {
  color: '#f8ff2f',
  backgroundColor: 'transparent',
  border: '1px solid #f8ff2f',
};

export const outlinedInversedBtnTheme = {
  color: '#000',
  backgroundColor: 'transparent',
  border: '1px solid #000',
};

export const textBtnTheme = {
  color: '#000',
  backgroundColor: 'transparent',
  border: '1px solid transparent',
};

export const inversedTextBtnTheme = {
  color: '#fff',
  backgroundColor: 'transparent',
  border: '1px solid transparent',
};
