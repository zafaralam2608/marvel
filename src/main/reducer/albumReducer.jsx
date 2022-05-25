import { loadAlbum } from '../constant/action';
import type from '../constant/type';

const initialState = {
  items: [],
  total: 0,
  loading: false,
};

const albumReducer = (state = initialState, action) => {
  const finalState = { ...state };

  switch (action.type) {
    case loadAlbum.pending: {
      finalState.loading = true;
      break;
    }
    case loadAlbum.failure: {
      finalState.loading = false;
      finalState.items = [];
      break;
    }
    case loadAlbum.success: {
      finalState.loading = false;
      finalState.total = action.payload.data.total;
      const list = [];
      action.payload.data.results.forEach((profile) => {
        const { id, thumbnail } = profile;
        if (!thumbnail) {
          console.log(id);
        }
        let title = '';
        switch (action.comp) {
          case type.CHARACTERS: {
            title = profile.name;
            break;
          }
          case type.CREATORS: {
            title = profile.fullName;
            break;
          }
          case type.COMICS:
          case type.EVENTS:
          case type.SERIES:
          case type.STORIES: {
            title = profile.title;
            break;
          }
          default:
            break;
        }
        list.push({ id, title, thumbnail });
      });
      finalState.items = list;
      break;
    }
    default:
      break;
  }

  return finalState;
};

export default albumReducer;
