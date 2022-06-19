import React from 'react';
import albumList from './album';
import Album from '../common/Album';

function Comics() {
  return (
    <Album parent="" comp={albumList[0]} />
  );
}

function Characters() {
  return (
    <Album parent="" comp={albumList[1]} />
  );
}

function Creators() {
  return (
    <Album parent="" comp={albumList[2]} />
  );
}

function Events() {
  return (
    <Album parent="" comp={albumList[3]} />
  );
}

function Series() {
  return (
    <Album parent="" comp={albumList[4]} />
  );
}

const contentList = [
  {
    link: 'comics',
    element: (<Comics />),
  },
  {
    link: 'characters',
    element: (<Characters />),
  },
  {
    link: 'creators',
    element: (<Creators />),
  },
  {
    link: 'events',
    element: (<Events />),
  },
  {
    link: 'series',
    element: (<Series />),
  },
];

export default contentList;
