import React from 'react';
import { StyledCatalogLayout } from './StyledCatalog';
import { Card, ProductType } from '../../components';
import products from '../../mock/mockProducts';

export const Catalog: React.FC = () => {
  return (
    <StyledCatalogLayout>
      {products.map((product: ProductType, i: number) => {
        return <Card key={i} product={product} />;
      })}
    </StyledCatalogLayout>
  );
};
