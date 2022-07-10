import styled from 'styled-components';
import { HeaderProps } from './index';

export const StyledHeader = styled.header<HeaderProps>`
  flex: 0 0 auto;
  display: grid;
  grid-template-columns: ${(props) => (props.isLoggedIn ? 'repeat(3, 1fr)' : '1fr')};
  grid-template-rows: auto auto;
  align-items: center;
  padding: 40px 50px;
  .nav,
  .user-controls {
    display: ${(props) => (props.isLoggedIn ? 'flex' : 'none')};
  }
`;
