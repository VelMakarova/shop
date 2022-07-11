import React from 'react';
import { Breadcrumbs, Title, Filters, Footer } from '../../components';
import { Header, Cart } from '../../containers';
import { StyledMain } from './catalog.styled';
import { Catalog } from '../../containers';
import { StyledCartContainer } from '../../containers/cart/cart.styled';

const CatalogPage: React.FC = () => {
  return (
    <>
      <StyledCartContainer>
        <Header isLoggedIn={true} isCatalogPage={true} />
        <StyledMain>
          <Breadcrumbs />
          <Title title="COATS & OUTERWEAR" />
          <div>
            <Filters />
          </div>
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
