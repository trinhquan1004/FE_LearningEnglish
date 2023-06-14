import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { SnackbarProvider } from 'notistack';
import AppRouter from './routers';

const theme = createTheme();

const App = () => (
  <SnackbarProvider>
    <ThemeProvider theme={theme}>
      <SCThemeProvider theme={theme}>
        <AppRouter />
      </SCThemeProvider>
    </ThemeProvider>
  </SnackbarProvider>
);

export default App;
