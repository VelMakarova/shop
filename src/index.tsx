import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import store from './store';
import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
  }
`;

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>
);
