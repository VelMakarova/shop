import styled from 'styled-components';

export const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  overflow: hidden;
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

export const StyledImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 0;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: all 0.1s ease;
  }

  &:hover:after {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .carousel &:after {
    content: none;
  }

  .card:hover & img {
    transform: scale(1.05);
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  transition: transform 0.2s ease;
`;
