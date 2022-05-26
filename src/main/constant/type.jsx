const type = {
  CHARACTERS: { link: '/characters', q: 'nameStartsWith', t: 'name' },
  COMICS: { link: '/comics', q: 'titleStartsWith', t: 'title' },
  CREATORS: { link: '/creators', q: 'nameStartsWith', t: 'fullName' },
  EVENTS: { link: '/events', q: 'nameStartsWith', t: 'title' },
  SERIES: { link: '/series', q: 'titleStartsWith', t: 'title' },
};

export default type;
