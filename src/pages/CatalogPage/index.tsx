import React, { Suspense } from 'react';
import { Breadcrumbs, Title, Filters, Footer, Loader } from '../../components';
import { Header } from '../../containers';
import { StyledMain } from './StyledCatalogPage';

const Catalog = React.lazy(() => import('../../containers').then((res) => ({ default: res.Catalog })));

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
        <Suspense fallback={<Loader />}>
          <Catalog />
        </Suspense>
        <div>pagination</div>
      </StyledMain>
      <Footer />
    </>
  );
};
