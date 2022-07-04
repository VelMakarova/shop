import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import ErrorBoundary from './containers/ErrorBoundary';
import App from './app/App';
import { GlobalStyle } from './app/StyledApp';

const container = document.getElementById('root') || document.createElement('div');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={false}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
        <GlobalStyle />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
