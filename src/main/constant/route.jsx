import React from 'react';
import { Dashboard, People } from '@mui/icons-material';
import Album from '../common/Album';
import Profile from '../common/Profile';

export const navs = [
  {
    key: 'dashboard', link: '/', label: 'Dashboard', icon: (<Dashboard />),
  },
  {
    key: 'characters', link: '/characters', label: 'Characters', icon: (<People />),
  },
];

export const routes = [
  { key: 'dashboard', link: '/', component: (<div>TODO</div>) },
  { key: 'characters', link: '/characters', component: (<Album />) },
  { key: 'character', link: '/characters/:id', component: (<Profile />) },
];
