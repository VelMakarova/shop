import styled from 'styled-components';

export const StyledCheckList = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  &:not(:last-child) {
    margin-right: 100px;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  margin-top: 25px;
`;

export const StyledItem = styled.li`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const StyledCheckLabel = styled.label`
  display: flex;
  align-items: center;
  .input-check {
    display: none;
  }
`;

export const StyledVisualCheck = styled.div`
  flex: 0 0 auto;
  height: 16px;
  width: 16px;
  border: 1px solid;
  margin-right: 10px;
  transition: background-color 0.2s ease;
  input:checked + & {
    background-color: black;
  }
`;
