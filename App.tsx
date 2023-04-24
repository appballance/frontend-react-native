import React from 'react';

import Routes from './src/routes';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/commons/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
