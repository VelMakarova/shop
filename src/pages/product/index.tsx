import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  StyledProductLayout,
  StyledImagesLayout,
  StyledImgWrapper,
  StyledImg,
  StyledDescription,
  StyledCode,
  StyledTitle,
  StyledPrice,
  StyledTable,
  StyledFilterTitle,
  StyledLink,
} from './product.styled';
import { StyledCartContainer } from '../../containers/cart/cart.styled';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addToCart } from '../../store/cart/cart.reducer';
import { CartItem } from '../../types';
import { paths } from '../../paths';
import { Cart, Header } from '../../containers';
import { ProductFilter } from './product-filter';
import { Accordion, Button, Footer } from '../../components';

const Product: React.FC = () => {
  const { id } = useParams();
  const product = useAppSelector((state) => state.products.find((item) => item.id === id));
  const [colorActiveFilter, setColorFilter] = useState(product?.color[0] ?? '');
  const [sizeActiveFilter, setSizeFilter] = useState(product?.size[0] ?? '');
  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    if (product !== undefined) {
      const newCartItem: CartItem = {
        id: product.code,
        size: sizeActiveFilter,
        color: colorActiveFilter,
        amount: 1,
        price: +product.price,
      };
      dispatch(addToCart(newCartItem));
    }
  };

  return (
    <>
      {product !== undefined && (
        <>
          <StyledCartContainer>
            <Header isCatalogPage isLoggedIn />
            <StyledProductLayout>
              <StyledImagesLayout>
                {product.img.slice(0, 4).map((item, index) => {
                  return (
                    <StyledImgWrapper key={index}>
                      <StyledImg src={item} alt={`product image ${index}`} />
                    </StyledImgWrapper>
                  );
                })}
              </StyledImagesLayout>
              <div>
                <StyledCode>{product.code}</StyledCode>
                <StyledTitle>{product.title}</StyledTitle>
                <StyledPrice>{`$ ${product.price}`}</StyledPrice>
                <StyledDescription>{product.description}</StyledDescription>
                <StyledTable>
                  <tbody>
                    <tr>
                      <td>
                        <StyledFilterTitle>Color:</StyledFilterTitle>
                      </td>
                      <td>
                        <ProductFilter
                          filters={product.color}
                          name="color"
                          onChange={setColorFilter}
                          defaultChecked={colorActiveFilter}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <StyledFilterTitle>Size:</StyledFilterTitle>
                      </td>
                      <td>
                        <ProductFilter
                          filters={product.size}
                          name="size"
                          onChange={setSizeFilter}
                          defaultChecked={sizeActiveFilter}
                        />
                      </td>
                    </tr>
                  </tbody>
                </StyledTable>
                <Button onClick={addToCartHandler} text="Add to bag" isInversed className="product-page-btn" />
                <Accordion title="PRODUCT DETAILS" content={product.description} />
                <Accordion title="SHIPPING AND RETURNS" content={product.description} />
                <Accordion title="CUSTOMER SERVICE" content={product.description} />
                <Accordion title="SHARE" content={product.description} />
                <StyledLink to={paths.INDEX}>Need help?</StyledLink>
              </div>
            </StyledProductLayout>
            <Cart />
          </StyledCartContainer>
          <Footer />
        </>
      )}
    </>
  );
};

export default Product;
