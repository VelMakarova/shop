import styled from 'styled-components';
import bg from '../../assets/background.jpg';

export const StyledLoginPage = styled.div<{ showLoginForm: boolean; showRegisterForm: boolean }>`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  background-color: #000;
  ${(props) => !props.showLoginForm && !props.showRegisterForm && `background-image: url(${bg});`}
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const StyledLoginContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
