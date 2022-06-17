import React from 'react';
import { Toolbar, Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import PropTypes from 'prop-types';
import Toggle from '../common/Toggle';

function Header({ heading }) {
  return (
    <MuiAppBar
      position="absolute"
    >
      <Toolbar sx={{ pr: '24px', textAlign: 'center' }}>
        <Typography component="h1" variant="h6" noWrap sx={{ flexGrow: 1 }}>
          {heading || ''}
        </Typography>
        <Toggle />
      </Toolbar>
    </MuiAppBar>
  );
}

Header.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Header;
