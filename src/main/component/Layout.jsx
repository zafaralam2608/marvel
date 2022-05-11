import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

function Layout() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header
        handleDrawerOpen={handleDrawerOpen}
        open={open}
      />
      <BrowserRouter>
        <Sidebar
          handleDrawerClose={handleDrawerClose}
          open={open}
        />
        <Content />
      </BrowserRouter>
    </Box>
  );
}

export default Layout;
