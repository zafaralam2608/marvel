import { loadAlbum } from '../constant/type';

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
        const { id, name, thumbnail } = profile;
        list.push({ id, name, thumbnail });
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
