import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Theme } from './styles/Theme/theme.jsx';
import { GlobalStyle } from './styles/Theme/GlobalStyles.jsx';
// import ContextProvider from './Context/ContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />

      <App />
    </Theme>
  </React.StrictMode>
);
