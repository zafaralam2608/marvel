import React from 'react';
import {
  Event, LibraryBooks, Man, MenuBook, People,
} from '@mui/icons-material';

const navList = [
  {
    link: 'comics', label: 'Comics', icon: (<MenuBook />),
  },
  {
    link: 'characters', label: 'Characters', icon: (<People />),
  },
  {
    link: 'creators', label: 'Creators', icon: (<Man />),
  },
  {
    link: 'events', label: 'Events', icon: (<Event />),
  },
  {
    link: 'series', label: 'Series', icon: (<LibraryBooks />),
  },
];

export default navList;
