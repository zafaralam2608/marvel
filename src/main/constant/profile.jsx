import albumList from './album';

const profileList = [
  {
    link: 'comics', t: 'title', child: [albumList[1], albumList[2], albumList[3]],
  },
  {
    link: 'characters', t: 'name', child: [albumList[0], albumList[3], albumList[4]],
  },
  {
    link: 'creators', t: 'fullName', child: [albumList[0], albumList[3], albumList[4]],
  },
  {
    link: 'events', t: 'title', child: [albumList[0], albumList[1], albumList[2], albumList[4]],
  },
  {
    link: 'series', t: 'title', child: [albumList[0], albumList[1], albumList[2], albumList[3]],
  },
];

export default profileList;
