import React from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import arrowIcon from '../assets/link_arrow.svg';

const StyledFooter = styled.footer`
  flex: 0 0 auto;
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: auto auto;
  grid-gap: 100px 100px;
  padding: 50px;
  background-color: #000;
  color: #fff;
`;

const StyledFooterCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledFooterTitle = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 25px;
`;

const StyledFooterList = styled.ul`
  list-style: none;
`;

const StyledFooterListItem = styled.li`
  margin-bottom: 5px;
`;

const StyledFooterLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const StyledFooterLinkUpperCase = styled(StyledFooterLink)`
  text-transform: uppercase;
`;

const StyledFooterRights = styled.div`
  grid-column: 1/4;
  grid-row: 2/3;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const StyledLocation = styled.div`
  grid-column: 4/6;
  grid-row: 2/3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledInternalLink = styled(Link)`
  font-size: 20px;
  color: inherit;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 100px;
  white-space: nowrap;
  &:after {
    content: '';
    display: inline-block;
    height: 14px;
    width: 14px;
    margin-left: 5px;
    background-image: url(${arrowIcon});
  }
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledFooterCol>
        <Logo isWhite />
      </StyledFooterCol>

      <StyledFooterCol>
        <StyledFooterTitle>About</StyledFooterTitle>
        <p>
          The Dsquared2 collections are produced in Italy, giving rise to the brand&quot;s motto of &quot;born in Canada, made in
          Italy&quot;.
        </p>
        <StyledFooterLink to="/about">read more</StyledFooterLink>
        <StyledInternalLink to="/">Newsletter</StyledInternalLink>
      </StyledFooterCol>

      <StyledFooterCol>
        <StyledFooterTitle>Customer Service</StyledFooterTitle>
        <StyledFooterList>
          <StyledFooterListItem>
            <StyledFooterLink to="/">FAQ</StyledFooterLink>
          </StyledFooterListItem>
          <StyledFooterListItem>
            <StyledFooterLink to="/">Tracking order</StyledFooterLink>
          </StyledFooterListItem>
          <StyledFooterListItem>
            <StyledFooterLink to="/">Shipping</StyledFooterLink>
          </StyledFooterListItem>
          <StyledFooterListItem>
            <StyledFooterLink to="/">Return and refunds</StyledFooterLink>
          </StyledFooterListItem>
          <StyledFooterListItem>
            <StyledFooterLink to="/">Payment</StyledFooterLink>
          </StyledFooterListItem>
        </StyledFooterList>
      </StyledFooterCol>

      <StyledFooterCol>
        <StyledFooterTitle>Legal Area</StyledFooterTitle>
        <StyledFooterList>
          <StyledFooterListItem>
            <StyledFooterLink to="/">Privacy policy</StyledFooterLink>
          </StyledFooterListItem>
          <StyledFooterListItem>
            <StyledFooterLink to="/">Cookie policy</StyledFooterLink>
          </StyledFooterListItem>
          <StyledFooterListItem>
            <StyledFooterLink to="/">Legal info</StyledFooterLink>
          </StyledFooterListItem>
        </StyledFooterList>
      </StyledFooterCol>

      <StyledFooterCol>
        <StyledFooterList>
          <StyledFooterListItem>
            <StyledFooterLinkUpperCase to="/">instagram</StyledFooterLinkUpperCase>
          </StyledFooterListItem>
          <StyledFooterListItem>
            <StyledFooterLinkUpperCase to="/">facebook</StyledFooterLinkUpperCase>
          </StyledFooterListItem>
          <StyledFooterListItem>
            <StyledFooterLinkUpperCase to="/">youtube</StyledFooterLinkUpperCase>
          </StyledFooterListItem>
          <StyledFooterListItem>
            <StyledFooterLinkUpperCase to="/">pinterest</StyledFooterLinkUpperCase>
          </StyledFooterListItem>
          <StyledFooterListItem>
            <StyledFooterLinkUpperCase to="/">twitter</StyledFooterLinkUpperCase>
          </StyledFooterListItem>
        </StyledFooterList>
      </StyledFooterCol>
      <StyledFooterRights>
        © 2022 DIGITAL BOITE S.R.L. ALL RIGHTS RESERVED. P.IVA AND C.F. 03796760365. REA MO 418470.
      </StyledFooterRights>
      <StyledLocation>
        <Button label="store locator" textButton reversed />
        <Button label="lang" textButton reversed />
      </StyledLocation>
    </StyledFooter>
  );
};
