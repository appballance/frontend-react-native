import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Routes } from 'application /routes';
import { ThemeProvider } from 'styled-components/native';
import { theme } from 'views/styles/theme';

function App() {
  return (
    <PaperProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </PaperProvider>
  );
}

export default App;
