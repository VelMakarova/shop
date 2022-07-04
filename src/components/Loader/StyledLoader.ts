import styled, { keyframes } from 'styled-components';

export const StyledLoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoaderSpinner = styled.div`
  height: 30px;
  width: 30px;
  border: 2px solid transparent;
  border-bottom-color: #f8ff2f;
  border-radius: 100%;
  animation: ${rotate} 1s infinite linear;
`;
