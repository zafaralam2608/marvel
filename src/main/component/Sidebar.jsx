import React, { useState } from 'react';
import {
  Divider, IconButton, Link, List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { ChevronLeft, Menu } from '@mui/icons-material';
import Drawer from '../common/Drawer';
import navList from '../constant/nav';

function Sidebar() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
        <IconButton onClick={() => (open ? handleDrawerClose() : handleDrawerOpen())}>
          {open
            ? (<ChevronLeft />)
            : (<Menu />)}
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {
          navList.map(
            (nav) => (
              <Link key={nav.label} href={`#/${nav.link}`} style={{ textDecoration: 'none' }}>
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

export default Sidebar;
