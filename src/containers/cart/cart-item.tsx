import React from 'react';
import {
  StyledCartItem,
  StyledCartItemImg,
  StyledCartItemContent,
  StyledCartItemDeleteBtn,
  StyledCartItemAmountBtn,
  StyledCartItemBlock,
  StyledCartItemAmount,
} from './cart.styled';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { removeFromCart, decreaseAmount, increaseAmount } from '../../store/cart/cart.reducer';

export const CartItem: React.FC<{ id: string }> = ({ id }) => {
  const dispatch = useAppDispatch();
  const item = useAppSelector((state) => state.cart.find((el) => el.id === id));
  const product = useAppSelector((state) => state.products.find((el) => el.code === id));

  const amountItemChanger = (action: string) => {
    if (action === 'increase') {
      dispatch(increaseAmount(id));
    } else if (action === 'decrease' && item!.amount > 1) {
      dispatch(decreaseAmount(id));
    } else if (action === 'decrease' && item!.amount === 1) {
      dispatch(removeFromCart(id));
    }
  };

  return (
    <StyledCartItem>
      <StyledCartItemImg src={product && product.img[0]} />
      <StyledCartItemContent>
        <StyledCartItemBlock>
          <div>{product?.title}</div>
          <StyledCartItemDeleteBtn onClick={() => dispatch(removeFromCart(item!.id))} />
        </StyledCartItemBlock>
        <StyledCartItemBlock>
          <StyledCartItemAmount>
            <StyledCartItemAmountBtn onClick={() => amountItemChanger('decrease')}>
              <svg width="6" height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="6" height="1" fill="white" />
              </svg>
            </StyledCartItemAmountBtn>
            <span>{item && item.amount}</span>
            <StyledCartItemAmountBtn onClick={() => amountItemChanger('increase')}>
              <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="3" width="7" height="1" fill="white" />
                <rect x="4" width="7" height="1" transform="rotate(90 4 0)" fill="white" />
              </svg>
            </StyledCartItemAmountBtn>
          </StyledCartItemAmount>
          <div>{item!.amount * Number(product?.price)}</div>
        </StyledCartItemBlock>
      </StyledCartItemContent>
    </StyledCartItem>
  );
};
