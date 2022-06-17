import albumList from './album';

const profileList = [
  {
    link: 'comics', titleParam: 'title', child: [albumList[1], albumList[2], albumList[3]],
  },
  {
    link: 'characters', titleParam: 'name', child: [albumList[0], albumList[3], albumList[4]],
  },
  {
    link: 'creators', titleParam: 'fullName', child: [albumList[0], albumList[3], albumList[4]],
  },
  {
    link: 'events', titleParam: 'title', child: [albumList[0], albumList[1], albumList[2], albumList[4]],
  },
  {
    link: 'series', titleParam: 'title', child: [albumList[0], albumList[1], albumList[2], albumList[3]],
  },
];

export default profileList;
