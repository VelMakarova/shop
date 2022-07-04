import styled from 'styled-components';

export const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledCardFooter = styled.div`
  flex: 0 0 auto;
  padding: 15px 0;
`;

export const StyledCardTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const StyledCardPrice = styled.div`
  font-size: 14px;
`;

export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
