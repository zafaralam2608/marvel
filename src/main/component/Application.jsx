import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Layout from './Layout';

function Application() {
  const theme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default Application;
