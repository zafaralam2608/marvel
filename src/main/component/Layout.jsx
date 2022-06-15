import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

function Layout() {
  const [open, setOpen] = useState(false);
  const [heading, setHeading] = useState('');

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
        heading={heading}
      />
      <BrowserRouter basename="https://zafaralam2608.github.io/marvel/">
        <Sidebar
          handleDrawerClose={handleDrawerClose}
          open={open}
        />
        <Content setHeading={setHeading} />
      </BrowserRouter>
    </Box>
  );
}

export default Layout;
