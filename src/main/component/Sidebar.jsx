import React from 'react';
import {
  Divider, IconButton, Link, List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { ChevronLeft, Dashboard, People } from '@mui/icons-material';
import PropTypes from 'prop-types';
import Drawer from '../common/Drawer';

function Sidebar({ open, handleDrawerClose }) {
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={() => handleDrawerClose()}>
          <ChevronLeft />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <Link href="/">
          <ListItem button>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link href="/profiles">
          <ListItem button>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Profiles" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};

export default Sidebar;
