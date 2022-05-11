import axios from 'axios';
import { album } from '../constant/type';

export function getProfilesPending() {
  return {
    type: album.pending,
  };
}

export function getProfilesFailure(payload) {
  return {
    type: album.failure,
    payload,
  };
}

export function getProfilesSuccess(payload) {
  return {
    type: album.success,
    payload,
  };
}

export const getProfiles = () => (
  (dispatch) => {
    dispatch(getProfilesPending());
    return axios.get('/characters', {
      params: {
        apikey: '0a52dd7bd3e2095d1c8bef780a62d586', ts: '1', hash: '711119359ea4ad79c5384c7456e5a9d1', limit: '10', offset: '300',
      },
    })
      .then((response) => {
        dispatch(getProfilesSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getProfilesFailure(err));
      });
  }
);
