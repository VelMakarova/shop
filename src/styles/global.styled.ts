import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Helvetica', sans-serif;
  }
  #root {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  }
  section {
    margin-bottom: 150px;
  }
`;
