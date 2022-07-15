import React, { Suspense, createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { paths } from '../paths';
import { LoginPage, Landing } from '../pages';
import { Loader } from '../components';
import { StyledApp } from './app.styled';
import { getProducts } from '../store/products/products.slice';
import mockProducts from '../mock/mockProducts';
import { useAppDispatch } from '../hooks';

interface cartInit {
  isOpen: boolean;
  toggleCartOpen: Dispatch<SetStateAction<boolean>>;
}

const cartInitState: cartInit = {
  isOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleCartOpen: () => {},
};
export const CartContext = createContext(cartInitState);

const CatalogPage = React.lazy(() => import('../pages/catalog'));
const ErrorPage = React.lazy(() => import('../pages/error'));
const ProductPage = React.lazy(() => import('../pages/product'));

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isCartOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getProducts(mockProducts));
  }, []);

  return (
    <CartContext.Provider value={{ isOpen: isCartOpen, toggleCartOpen: setIsOpen }}>
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
    </CartContext.Provider>
  );
};

export default App;
