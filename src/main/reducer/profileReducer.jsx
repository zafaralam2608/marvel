import { loadProfile } from '../constant/action';

const initialState = {
  loading: false,
  title: '',
  description: '',
  thumbnail: '',
};

const profileReducer = (state = initialState, action) => {
  const finalState = { ...state };

  switch (action.type) {
    case loadProfile.pending: {
      finalState.loading = true;
      break;
    }
    case loadProfile.failure: {
      finalState.loading = false;
      break;
    }
    case loadProfile.success: {
      finalState.loading = false;
      if (action.payload.data.total === 1) {
        const result = action.payload.data.results[0];
        finalState.title = result[action.comp.t];
        finalState.description = result.description || '';
        finalState.thumbnail = `${result.thumbnail.path}/portrait_uncanny.${result.thumbnail.extension}`;
      }
      break;
    }
    default:
      break;
  }

  return finalState;
};

export default profileReducer;
