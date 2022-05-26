import React from 'react';
import {
  Dashboard, Event, LibraryBooks, Man, MenuBook, People,
} from '@mui/icons-material';
import type from './type';
import Album from '../common/Album';
import Profile from '../common/Profile';

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
  { key: 'dashboard', link: '/', component: (<div>TODO</div>) },
  { key: 'characters', link: '/characters', component: (<Album comp={type.CHARACTERS} />) },
  { key: 'character', link: '/characters/:id', component: (<Profile />) },
  { key: 'comics', link: '/comics', component: (<Album comp={type.COMICS} />) },
  { key: 'comic', link: '/comics/:id', component: (<Profile />) },
  { key: 'creators', link: '/creators', component: (<Album comp={type.CREATORS} />) },
  { key: 'creators', link: '/creators/:id', component: (<Profile />) },
  { key: 'events', link: '/events', component: (<Album comp={type.EVENTS} />) },
  { key: 'event', link: '/events/:id', component: (<Profile />) },
  { key: 'serieses', link: '/series', component: (<Album comp={type.SERIES} />) },
  { key: 'series', link: '/series/:id', component: (<Profile />) },
];
