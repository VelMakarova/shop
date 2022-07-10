import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bg from '../../assets/background.jpg';

export const StyledError = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  & > span {
    font-size: 200px;
    font-weight: 600;
    color: ${(props) => props.theme.config.palette.accent};
    margin-bottom: 30px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.config.palette.white};
  font-size: 20px;
`;
