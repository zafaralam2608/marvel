import React from 'react';
import { IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import AppBar from '../common/AppBar';

function Header({ handleDrawerOpen, open, heading }) {
  return (
    <AppBar position="absolute" open={open}>
      <Toolbar sx={{ pr: '24px', textAlign: 'center' }}>
        <IconButton
          edge="start"
          color="default"
          aria-label="open drawer"
          onClick={() => handleDrawerOpen()}
          sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          {heading || 'Dashboard'}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
};

export default Header;
