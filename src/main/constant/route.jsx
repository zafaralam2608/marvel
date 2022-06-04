import React from 'react';
import {
  Dashboard, Event, LibraryBooks, Man, MenuBook, People,
} from '@mui/icons-material';

export const navs = [
  {
    key: 'dashboard', link: '/', label: 'Dashboard', icon: (<Dashboard />),
  },
  {
    key: 'characters', link: '/characters', label: 'Characters', icon: (<People />),
  },
  {
    key: 'comics', link: '/comics', label: 'Comics', icon: (<MenuBook />),
  },
  {
    key: 'creators', link: '/creators', label: 'Creators', icon: (<Man />),
  },
  {
    key: 'events', link: '/events', label: 'Events', icon: (<Event />),
  },
  {
    key: 'series', link: '/series', label: 'Series', icon: (<LibraryBooks />),
  },
];

export const routes = [
];
