import { loadAlbum } from '../constant/action';

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
        const title = profile[action.comp.t];
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
