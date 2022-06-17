import { loadProfile } from '../constant/action';

const initialState = {
  loading: false,
  title: '',
  description: '',
  thumbnail: '',
  count: {},
  error: false,
};

const profileReducer = (state = initialState, action) => {
  const finalState = { ...state };

  switch (action.type) {
    case loadProfile.pending: {
      finalState.loading = true;
      finalState.error = false;
      finalState.title = '';
      finalState.description = '';
      finalState.thumbnail = '';
      finalState.count = {};
      break;
    }
    case loadProfile.failure: {
      finalState.loading = false;
      finalState.title = '';
      finalState.description = '';
      finalState.thumbnail = '';
      finalState.count = {};
      finalState.error = true;
      break;
    }
    case loadProfile.success: {
      finalState.loading = false;
      finalState.error = false;
      if (action.payload.data.total === 1) {
        const result = action.payload.data.results[0];
        finalState.title = result[action.titleParam];
        action.child.forEach((item) => {
          const { link } = item;
          const { available } = result[link];
          finalState.count[link] = available;
        });
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
