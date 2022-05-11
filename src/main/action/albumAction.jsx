import axios from 'axios';
import { album } from '../constant/type';
import { buildParams } from '../util/apiUtility';

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
      params: buildParams(),
    })
      .then((response) => {
        dispatch(getProfilesSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getProfilesFailure(err));
      });
  }
);
