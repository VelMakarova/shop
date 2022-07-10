import React from 'react';
import { Breadcrumbs, Title, Filters, Footer } from '../../components';
import { Header } from '../../containers';
import { StyledMain } from './catalog.styled';
import { Catalog } from '../../containers';

const CatalogPage: React.FC = () => {
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

export default CatalogPage;
