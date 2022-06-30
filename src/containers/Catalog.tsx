import React from 'react';
import styled from 'styled-components';
import { Card, ProductType } from '../components';
import products from '../mock';

const StyledCatalogLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 65px 20px;
`;

interface CatalogProps {
  filter: string;
}

export const Catalog: React.FC<CatalogProps> = ({ filter }) => {
  return (
    <StyledCatalogLayout>
      {products.map((product: ProductType, i: number) => {
        console.log(filter);
        return <Card key={i} product={product} />;
      })}
    </StyledCatalogLayout>
  );
};
