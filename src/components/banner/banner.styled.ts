import styled from 'styled-components';

export const StyledBanner = styled.div`
  position: relative;
  padding-top: 51%;
`;

export const StyledImg = styled.img`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const StyledBannerContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 50px;
`;

export const StyledBannerTitle = styled.div`
  font-size: 138px;
  padding-left: 200px;
  text-indent: -200px;
  margin-bottom: 12px;
`;

export const StyledParagraph = styled.p`
  max-width: 460px;
  text-transform: uppercase;
  color: #fff;
  font-size: 20px;
`;

export const StyledBannerBottom = styled.div`
  display: flex;
  justify-content: space-between;
  .banner-btn {
    max-width: 320px;
    align-self: center;
  }
`;
