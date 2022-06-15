import axios from 'axios';
import { loadProfile } from '../constant/action';
import { API_URL, buildParams } from '../util/apiUtility';

export function getProfilePending() {
  return {
    type: loadProfile.pending,
  };
}

export function getProfileFailure(payload) {
  return {
    type: loadProfile.failure,
    payload,
  };
}

export function getProfileSuccess(payload, t) {
  return {
    type: loadProfile.success,
    payload,
    t,
  };
}

export const getProfile = (apiLink, t) => (
  (dispatch) => {
    dispatch(getProfilePending());
    return axios.get(`${API_URL}${apiLink}`, {
      params: buildParams(),
    })
      .then((response) => {
        dispatch(getProfileSuccess(response.data, t));
      })
      .catch((err) => {
        dispatch(getProfileFailure(err));
      });
  }
);
