import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './Sidebar';
import Content from './Content';

function Layout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HashRouter>
        <Sidebar />
        <Content />
      </HashRouter>
    </Box>
  );
}

export default Layout;
