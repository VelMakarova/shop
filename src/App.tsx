import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { paths } from './paths';
import { LoginPage, MainPage } from './pages';
import { Catalog } from './containers';

const StyledApp = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route path={paths.LOGIN} element={<LoginPage />} />
          <Route path={paths.REGISTER} element={<LoginPage showRegister />} />
          <Route path={paths.INDEX} element={<MainPage />}>
            <Route index element={<Catalog filter={'man'} />} />
            <Route path={paths.WOMAN} element={<Catalog filter={'woman'} />} />
            <Route path={paths.KIDS} element={<Catalog filter={'kids'} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
