import React from 'react';
import {
  Event, LibraryBooks, Man, MenuBook, People,
} from '@mui/icons-material';

export const navs = [
  {
    link: '/comics', label: 'Comics', icon: (<MenuBook />),
  },
  {
    link: '/characters', label: 'Characters', icon: (<People />),
  },
  {
    link: '/creators', label: 'Creators', icon: (<Man />),
  },
  {
    link: '/events', label: 'Events', icon: (<Event />),
  },
  {
    link: '/series', label: 'Series', icon: (<LibraryBooks />),
  },
];

export const root = [
  {
    link: '/comics', label: 'Comics', q: 'titleStartsWith', t: 'title',
  },
  {
    link: '/characters', label: 'Characters', q: 'nameStartsWith', t: 'name',
  },
  {
    link: '/creators', label: 'Creators', q: 'nameStartsWith', t: 'fullName',
  },
  {
    link: '/events', label: 'Events', q: 'nameStartsWith', t: 'title',
  },
  {
    link: '/series', label: 'Series', q: 'titleStartsWith', t: 'title',
  },
];

export const derived = [
  {
    link: '/comics', child: [root[1], root[2], root[3]],
  },
  {
    link: '/characters', child: [root[0], root[3], root[4]],
  },
  {
    link: '/creators', child: [root[0], root[3], root[4]],
  },
  {
    link: '/events', child: [root[0], root[1], root[2], root[4]],
  },
  {
    link: '/series', child: [root[0], root[1], root[2], root[3]],
  },
];

export const error = [
  {
    link: '/404', title: 'Page Not Found', message: 'The page you are trying to access is not available.', image: '/assets/404.jpg',
  },
  {
    link: '/500', title: 'Internal Server Error', message: 'Encountered an error while trying to access request', image: '/assets/500.gif',
  },
];
