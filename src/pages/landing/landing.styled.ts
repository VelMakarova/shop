import styled from 'styled-components';

export const StyledLanding = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: #fff;
  .logo {
    grid-column: 1/4;
    grid-row: 2/3;
  }
  .user-controls {
    grid-column: 3/4;
  }
  .nav {
    color: #fff;
  }
`;
