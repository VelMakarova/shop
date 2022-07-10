import React from 'react';
import { Button } from '../button';
import {
  StyledBanner,
  StyledBannerContent,
  StyledImg,
  StyledBannerTitle,
  StyledBannerBottom,
  StyledParagraph,
} from './banner.styled';
import banner from '../../assets/banner.jpg';

export const Banner: React.FC = () => {
  return (
    <StyledBanner className="banner">
      <StyledImg src={banner} alt="banner" />
      <StyledBannerContent>
        <StyledBannerTitle>
          ONE LIFE <br />
          ONE PLANET
        </StyledBannerTitle>
        <StyledBannerBottom>
          <StyledParagraph>
            THE NEW ONE LIFE ONE PLANET COLLECTION INCLUDES A GRS, GETS OR OCS CERTIFIED SPECIAL CAPSULE FOR SPRING / SUMMER 2022
          </StyledParagraph>
          <Button className="banner-btn" text="shop now" isOutlined />
        </StyledBannerBottom>
      </StyledBannerContent>
    </StyledBanner>
  );
};
