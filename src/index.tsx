import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import ErrorBoundary from './containers/error-boundary';
import App from './app/App';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './styles';
import { Loader } from './components';

const container = document.getElementById('root') || document.createElement('div');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loader />}>
        <ErrorBoundary>
          <ThemeProvider theme={theme}>
            <App />
            <GlobalStyle />
          </ThemeProvider>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
