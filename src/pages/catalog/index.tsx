import React from 'react';
import { Breadcrumbs, Title, Filter, Footer } from '../../components';
import { Header, Cart } from '../../containers';
import { StyledMain } from './catalog.styled';
import { Catalog } from '../../containers';
import { StyledCartContainer } from '../../containers/cart/cart.styled';
import { useAppSelector } from '../../hooks';

const CatalogPage: React.FC = () => {
  const { category } = useAppSelector((state) => state.filters);
  return (
    <>
      <StyledCartContainer>
        <Header isLoggedIn={true} isCatalogPage={true} />
        <StyledMain>
          <Breadcrumbs />
          <Title title={category} />
          <Filter />
          <Catalog />
          <div>pagination</div>
        </StyledMain>
        <Cart />
      </StyledCartContainer>
      <Footer />
    </>
  );
};

export default CatalogPage;
