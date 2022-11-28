import React from 'react';

import { Routes } from 'application /routes';
import { ThemeProvider } from 'styled-components/native';
import { theme } from 'views/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
