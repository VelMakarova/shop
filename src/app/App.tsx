import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { paths } from '../paths';
import { LoginPage, CatalogPage, Landing } from '../pages';

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
          <Route path={paths.INDEX} element={<Landing />} />
          <Route path={paths.CATALOG} element={<CatalogPage />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
