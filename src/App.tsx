import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Header } from './components';
import { RootState } from './store';

const StyledApp = styled.div`
  background-color: ${(props) => (props.theme === 'light' ? 'white' : 'black')};
`;

function App() {
  const { theme } = useSelector((state: RootState) => state);

  return (
    <StyledApp theme={theme}>
      <Header />
    </StyledApp>
  );
}

export default App;
