import { album } from '../constant/type';

const initialState = {
  profiles: [],
  profilesLoading: false,
};

const albumReducer = (state = initialState, action) => {
  const finalState = { ...state };

  switch (action.type) {
    case album.pending: {
      finalState.profilesLoading = true;
      break;
    }
    case album.failure: {
      finalState.profilesLoading = false;
      finalState.profiles = [];
      break;
    }
    case album.success: {
      finalState.profilesLoading = false;
      action.payload.data.results.forEach((profile) => {
        const { id, name, thumbnail } = profile;
        finalState.profiles.push({ id, name, thumbnail });
      });
      break;
    }
    default:
      break;
  }

  return finalState;
};

export default albumReducer;
