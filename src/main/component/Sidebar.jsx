import React from 'react';
import {
  Divider, IconButton, Link, List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { ChevronLeft } from '@mui/icons-material';
import PropTypes from 'prop-types';
import Drawer from '../common/Drawer';
import { navs } from '../constant/route';

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
        {
          navs.map(
            (nav) => (
              <Link key={nav.key} href={nav.link} style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    {nav.icon}
                  </ListItemIcon>
                  <ListItemText primary={nav.label} />
                </ListItem>
              </Link>
            ),
          )
        }
      </List>
    </Drawer>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};

export default Sidebar;
