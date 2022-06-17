import React from 'react';
import { Toolbar, Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import PropTypes from 'prop-types';

const drawerWidth = 200;

function Header({ heading, open }) {
  return (
    <MuiAppBar
      position="absolute"
      sx={(
        open && {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
        })}
    >
      <Toolbar sx={{ pr: '24px', textAlign: 'center' }}>
        <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          {heading || ''}
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
}

Header.propTypes = {
  open: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
};

export default Header;
