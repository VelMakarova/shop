import styled from 'styled-components';
import cross from '../../assets/cross.svg';

export const StyledCartContainer = styled.div`
  position: relative;
  z-index: 2;
`;

export const StyledCart = styled.div<{ isCartOpen: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${(props) => (props.isCartOpen ? '0' : '-100%')};
  width: 400px;
  background-color: black;
  color: white;
  transition: right 0.5s ease;
`;

export const StyledStickyCartContent = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px 50px;
`;

export const StyledCartHeader = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
`;

export const StyledCartBody = styled.div`
  flex: 1 1 auto;
`;

export const StyledCartFooter = styled.div`
  flex: 0 0 auto;
`;

export const StyledCartSubtotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  text-transform: uppercase;
`;

export const StyledCartTitle = styled.div`
  text-transform: uppercase;
  font-size: 20px;
`;

export const StyledCartCloseBtn = styled.button`
  height: 18px;
  width: 18px;
  background-color: transparent;
  border: none;
  background-image: url(${cross});
  cursor: pointer;
`;

export const StyledCartItem = styled.div`
  display: flex;
  max-height: 62px;
  font-size: 12px;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const StyledCartItemImg = styled.img`
  flex: 0 0 50px;
  display: block;
  height: 62px;
  object-fit: contain;
`;

export const StyledCartItemContent = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 15px;
`;

export const StyledCartItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledCartItemDeleteBtn = styled.button`
  flex: 0 0 auto;
  height: 10px;
  width: 10px;
  background-color: transparent;
  border: none;
  background-image: url(${cross});
  background-position: center;
  background-size: contain;
  cursor: pointer;
`;

export const StyledCartItemAmount = styled.div`
  display: flex;
  align-items: center;
  span {
    padding: 0 15px;
  }
`;

export const StyledCartItemAmountBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 17px;
  width: 17px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
