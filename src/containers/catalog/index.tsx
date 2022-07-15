/* eslint-disable @typescript-eslint/ban-ts-comment*/
import React from 'react';
import { StyledCatalogLayout } from './catalog.styled';
import { Card } from '../../components';
import { useAppSelector } from '../../hooks';
import { selectByFilter } from '../../store/products/products.slice';
import { useLocation } from 'react-router-dom';

export const Catalog: React.FC = () => {
  const location = useLocation();
  // @ts-ignore
  const { filter } = location.state;
  // @ts-ignore
  const activeFilter = useAppSelector((state) => state.filters[filter]);
  const filteredProducts = useAppSelector(selectByFilter(filter, activeFilter));

  return (
    <StyledCatalogLayout>
      {filteredProducts.map((product, i: number) => {
        return <Card key={i} product={product} />;
      })}
    </StyledCatalogLayout>
  );
};
