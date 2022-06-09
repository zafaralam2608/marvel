import React from 'react';
import {
  Event, LibraryBooks, Man, MenuBook, People,
} from '@mui/icons-material';

export const navs = [
  {
    key: 0, link: '/comics', label: 'Comics', icon: (<MenuBook />),
  },
  {
    key: 1, link: '/characters', label: 'Characters', icon: (<People />),
  },
  {
    key: 2, link: '/creators', label: 'Creators', icon: (<Man />),
  },
  {
    key: 3, link: '/events', label: 'Events', icon: (<Event />),
  },
  {
    key: 4, link: '/series', label: 'Series', icon: (<LibraryBooks />),
  },
];

export const root = [
  {
    key: 0, link: '/comics', label: 'Comics', q: 'titleStartsWith', t: 'title',
  },
  {
    key: 1, link: '/characters', label: 'Characters', q: 'nameStartsWith', t: 'name',
  },
  {
    key: 2, link: '/creators', label: 'Creators', q: 'nameStartsWith', t: 'fullName',
  },
  {
    key: 3, link: '/events', label: 'Events', q: 'nameStartsWith', t: 'title',
  },
  {
    key: 4, link: '/series', label: 'Series', q: 'titleStartsWith', t: 'title',
  },
];

export const derived = [
  {
    key: 0, link: '/comics', child: [root[1], root[2], root[3]],
  },
  {
    key: 1, link: '/characters', child: [root[0], root[3], root[4]],
  },
  {
    key: 2, link: '/creators', child: [root[0], root[3], root[4]],
  },
  {
    key: 3, link: '/events', child: [root[0], root[1], root[2], root[4]],
  },
  {
    key: 4, link: '/series', child: [root[0], root[1], root[2], root[3]],
  },
];

export const error = [
  {
    key: 0, link: '404', title: 'Page Not Found', message: 'The page you are trying to access is not available.', image: '/assets/404.jpg',
  },
  {
    key: 1, link: '500', title: 'Internal Server Error', message: 'Encountered an error while trying to access request', image: '/assets/500.gif',
  },
];
