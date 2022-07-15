import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledLink, StyledNav } from './nav.styled';
import { paths } from '../../paths';
import { useAppDispatch } from '../../hooks';
import { setGender } from '../../store/filter/filter.slice';

export const Nav: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const transitionHandler = (e: React.MouseEvent<HTMLAnchorElement>, filterName: string) => {
    e.preventDefault();
    dispatch(setGender(filterName));
    navigate(paths.CATALOG, { state: { filter: 'gender' } });
  };

  return (
    <StyledNav className="nav">
      <StyledLink to={paths.CATALOG} onClick={(e) => transitionHandler(e, 'man')}>
        Man
      </StyledLink>
      <StyledLink to={paths.CATALOG} onClick={(e) => transitionHandler(e, 'woman')}>
        Woman
      </StyledLink>
      <StyledLink to={paths.CATALOG} onClick={(e) => transitionHandler(e, 'kids')}>
        Kids
      </StyledLink>
    </StyledNav>
  );
};
