import React from 'react';
import { Logo } from '../logo';
import { Button } from '../button';
import {
  StyledLink,
  StyledFooterRights,
  StyledInternalLink,
  StyledFooter,
  StyledTitle,
  StyledList,
  StyledListItem,
  StyledLocation,
  StyledLinkUpperCase,
  StyledCol,
} from './footer.styled';

export const Footer: React.FC<{ reversed?: boolean }> = ({ reversed }) => {
  return (
    <StyledFooter reversed={reversed}>
      <StyledCol>
        <Logo color="#fff" />
      </StyledCol>

      <StyledCol>
        <StyledTitle>About</StyledTitle>
        <p>
          The Dsquared2 collections are produced in Italy, giving rise to the brand&quot;s motto of &quot;born in Canada, made in
          Italy&quot;.
        </p>
        <StyledLink to="/about">read more</StyledLink>
        <StyledInternalLink to="/">Newsletter</StyledInternalLink>
      </StyledCol>

      <StyledCol>
        <StyledTitle>Customer Service</StyledTitle>
        <StyledList>
          <StyledListItem>
            <StyledLink to="/">FAQ</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/">Tracking order</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/">Shipping</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/">Return and refunds</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/">Payment</StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledCol>

      <StyledCol>
        <StyledTitle>Legal Area</StyledTitle>
        <StyledList>
          <StyledListItem>
            <StyledLink to="/">Privacy policy</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/">Cookie policy</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/">Legal info</StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledCol>

      <StyledCol>
        <StyledList>
          <StyledListItem>
            <StyledLinkUpperCase to="/">instagram</StyledLinkUpperCase>
          </StyledListItem>
          <StyledListItem>
            <StyledLinkUpperCase to="/">facebook</StyledLinkUpperCase>
          </StyledListItem>
          <StyledListItem>
            <StyledLinkUpperCase to="/">youtube</StyledLinkUpperCase>
          </StyledListItem>
          <StyledListItem>
            <StyledLinkUpperCase to="/">pinterest</StyledLinkUpperCase>
          </StyledListItem>
          <StyledListItem>
            <StyledLinkUpperCase to="/">twitter</StyledLinkUpperCase>
          </StyledListItem>
        </StyledList>
      </StyledCol>

      <StyledFooterRights>
        © 2022 DIGITAL BOITE S.R.L. ALL RIGHTS RESERVED. P.IVA AND C.F. 03796760365. REA MO 418470.
      </StyledFooterRights>

      <StyledLocation>
        <Button text="store locator" isTextBtn isInversed={!reversed} />
        <Button text="lang" isTextBtn isInversed={!reversed} />
      </StyledLocation>
    </StyledFooter>
  );
};
