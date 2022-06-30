import React from 'react';
import styled from 'styled-components';
import { Catalog } from '../containers';
import { Breadcrumbs, Header, CategoryTitle, Filters, Footer } from '../components';

const StyledMain = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
`;

export const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Breadcrumbs />
        <CategoryTitle title="COATS & OUTERWEAR" />
        <div>
          <Filters />
        </div>
        <Catalog filter="man" />
        <div>pagination</div>
      </StyledMain>
      <Footer />
    </>
  );
};
