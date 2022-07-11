import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  StyledCart,
  StyledStickyCartContent,
  StyledCartTitle,
  StyledCartHeader,
  StyledCartCloseBtn,
  StyledCartBody,
  StyledCartFooter,
  StyledCartSubtotal,
} from './cart.styled';
import { CartItem } from './cart-item';
import { Button } from '../../components';
import { hideCart } from '../../store/cart-visibility/cart-visibility.reducer';
import { EmptyCart } from './empty-cart';

export const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector((state) => state.cartVisibility);
  const products = useAppSelector((state) => state.cart) || [];

  return (
    <StyledCart isCartOpen={isCartOpen}>
      <StyledStickyCartContent>
        <StyledCartHeader>
          <StyledCartTitle>Shopping cart</StyledCartTitle>
          <StyledCartCloseBtn onClick={() => dispatch(hideCart())} />
        </StyledCartHeader>
        <StyledCartBody>
          {products.length ? (
            products.map((item) => {
              return <CartItem key={item.id} id={item.id} />;
            })
          ) : (
            <EmptyCart />
          )}
        </StyledCartBody>
        <StyledCartFooter>
          <StyledCartSubtotal>
            <span>Subtotal: </span>
            <span>{`$ ${products.reduce((sum, current) => sum + current.price * current.amount, 0)}`}</span>
          </StyledCartSubtotal>
          <Button text={'Checkout'} />
        </StyledCartFooter>
      </StyledStickyCartContent>
    </StyledCart>
  );
};
