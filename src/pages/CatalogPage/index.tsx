import React from 'react';
import { Catalog } from '../../containers';
import { Breadcrumbs, Header, Title, Filters, Footer } from '../../components';
import { StyledMain } from './StyledCatalogPage';

export const CatalogPage: React.FC = () => {
  return (
    <>
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
      <Footer />
    </>
  );
};
