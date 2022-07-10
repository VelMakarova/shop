import React, { useEffect } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { StyledCatalogLayout } from './catalog.styled';
import { Card } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getProducts } from '../../store/products/products.reducer';
import mockProducts from '../../mock/mockProducts';
import { RootState } from '../../store';

const selectGenderProducts = createSelector(
  (state: RootState) => state.products,
  (products) => products.filter((product) => product.gender === 'man'),
);
export const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  // const filter = useAppSelector(state => state.filters);

  const womanProducts = useAppSelector(selectGenderProducts);

  useEffect(() => {
    dispatch(getProducts(mockProducts));
  }, []);

  return (
    <StyledCatalogLayout>
      {womanProducts.map((product, i: number) => {
        return <Card key={i} product={product} />;
      })}
    </StyledCatalogLayout>
  );
};
