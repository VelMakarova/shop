import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  button {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  text-transform: uppercase;
  text-decoration: underline;
`;
