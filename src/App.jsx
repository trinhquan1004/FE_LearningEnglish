import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import AppRouter from './routers';

const theme = createTheme();

const App = () => (
  <SnackbarProvider>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </SnackbarProvider>
);

export default App;
