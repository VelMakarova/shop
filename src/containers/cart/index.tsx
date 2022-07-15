import React, { useContext } from 'react';
import { useAppSelector } from '../../hooks';
import { CartContext } from '../../app/App';
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
import { EmptyCart } from './empty-cart';

export const Cart: React.FC = () => {
  const products = useAppSelector((state) => state.cart) || [];
  const cartState = useContext(CartContext);

  const toggle = () => {
    cartState.toggleCartOpen(false);
    console.log(cartState.isOpen);
  };

  return (
    <StyledCart isCartOpen={cartState.isOpen}>
      <StyledStickyCartContent>
        <StyledCartHeader>
          <StyledCartTitle>Shopping cart</StyledCartTitle>
          <StyledCartCloseBtn onClick={toggle} />
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
