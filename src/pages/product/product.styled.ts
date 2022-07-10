import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledProductLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 0 50px;
  padding: 0 50px;
  .product-page-btn {
    margin-bottom: 80px;
  }
`;

export const StyledImagesLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(360px, 493px));
  grid-template-rows: auto auto;
  grid-gap: 10px;
`;

export const StyledImgWrapper = styled.div`
  overflow: hidden;
`;

export const StyledImg = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 3/4;
`;

export const StyledDescription = styled.p`
  font-size: 16px;
`;

export const StyledCode = styled.div`
  color: #747474;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

export const StyledTitle = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
`;
export const StyledPrice = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  margin: 50px 0;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 35px 0;
  font-size: 16px;
  text-transform: uppercase;
  & td {
    padding: 15px 0;
  }
`;

export const StyledFilterTitle = styled.div`
  margin-right: 50px;
`;

export const StyledLabel = styled.label`
  &:not(:last-child) {
    margin-right: 20px;
  }
  & > input {
    display: none;
  }
  & > input:checked + .visual-label {
    text-decoration: underline;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  margin-top: 35px;
  color: ${(props) => props.theme.config.palette.gray};
  text-decoration: none;
`;
