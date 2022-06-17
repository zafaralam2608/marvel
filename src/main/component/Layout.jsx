import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
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
      <HashRouter>
        <Sidebar
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
          open={open}
        />
        <Content
          handleDrawerOpen={handleDrawerOpen}
          open={open}
        />
      </HashRouter>
    </Box>
  );
}

export default Layout;
