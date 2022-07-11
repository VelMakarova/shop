import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { paths } from '../paths';
import { LoginPage, Landing } from '../pages';
import { Loader } from '../components';
import { StyledApp } from './app.styled';

const CatalogPage = React.lazy(() => import('../pages/catalog'));
const ErrorPage = React.lazy(() => import('../pages/error'));
const ProductPage = React.lazy(() => import('../pages/product'));

const App = () => {
  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route path={paths.LOGIN} element={<LoginPage />} />v
          <Route path={paths.REGISTER} element={<LoginPage showRegister />} />
          <Route path={paths.INDEX} element={<Landing />} />
          <Route
            path={paths.CATALOG}
            element={
              <Suspense fallback={<Loader />}>
                <CatalogPage />
              </Suspense>
            }
          />
          <Route
            path={`${paths.PRODUCT}/:id`}
            element={
              <Suspense fallback={<Loader />}>
                <ProductPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loader />}>
                <ErrorPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
};

export default App;
