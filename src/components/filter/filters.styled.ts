import styled from 'styled-components';

export const StyledFilter = styled.div`
  position: relative;
  z-index: 2;
`;

export const StyledFilterTrigger = styled.div``;

export const StyledFilterDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  padding: 50px;
  background-color: ${(props) => props.theme.config.palette.accent};
`;
