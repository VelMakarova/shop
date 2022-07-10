import styled from 'styled-components';
import { Link } from 'react-router-dom';
import arrowIcon from '../../assets/link_arrow.svg';

export const StyledFooter = styled.footer<{ reversed?: boolean }>`
  flex: 0 0 auto;
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: auto auto;
  grid-gap: 100px 100px;
  padding: 50px;
  background-color: ${(props) => (props.reversed ? '#f8ff2f' : '#000')};
  color: ${(props) => (props.reversed ? '#000' : '#fff')};
`;

export const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 25px;
`;

export const StyledList = styled.ul`
  list-style: none;
`;

export const StyledListItem = styled.li`
  margin-bottom: 5px;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const StyledLinkUpperCase = styled(StyledLink)`
  text-transform: uppercase;
`;

export const StyledFooterRights = styled.div`
  grid-column: 1/4;
  grid-row: 2/3;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const StyledLocation = styled.div`
  grid-column: 4/6;
  grid-row: 2/3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledInternalLink = styled(Link)`
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
