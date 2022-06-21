import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from './hooks';
import { LoginPage } from './pages';

const StyledApp = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    background-color: black;
`;

function App() {
  const { theme } = useAppSelector((state) => state);

  return (
    <StyledApp theme={theme}>
      <LoginPage />
    </StyledApp>
  );
}

export default App;
