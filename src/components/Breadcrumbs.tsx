import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledBreadCrumbs = styled.div`
  display: flex;
`;

const StyledBreadcrumbsLink = styled(Link)``;

export const Breadcrumbs: React.FC = () => {
  return <StyledBreadCrumbs>breadcrumbs</StyledBreadCrumbs>;
};
