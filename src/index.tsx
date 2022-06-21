import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import store, { persistor } from './store';
import Router from './Router';

const GlobalStyle = createGlobalStyle`
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
`;

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={false}>
        <Router />
        <GlobalStyle />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
