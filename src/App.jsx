import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppRouter from './routers';

const theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <AppRouter />
  </ThemeProvider>
);

export default App;
