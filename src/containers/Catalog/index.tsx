import React, { useEffect } from 'react';
import { StyledCatalogLayout } from './StyledCatalog';
import { Card, ProductType } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getProducts } from '../../store/products/productsReducer';
import mockProducts from '../../mock/mockProducts';

export const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getProducts(mockProducts));
  }, []);

  return (
    <StyledCatalogLayout>
      {products.map((product: ProductType, i: number) => {
        return <Card key={i} product={product} />;
      })}
    </StyledCatalogLayout>
  );
};
