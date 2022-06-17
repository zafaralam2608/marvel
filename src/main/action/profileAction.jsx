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

export function getProfileSuccess(payload, titleParam, child) {
  return {
    type: loadProfile.success,
    payload,
    titleParam,
    child,
  };
}

export const getProfile = (apiLink, titleParam, child) => (
  (dispatch) => {
    dispatch(getProfilePending());
    return axios.get(`${API_URL}${apiLink}`, {
      params: buildParams(),
    })
      .then((response) => {
        dispatch(getProfileSuccess(response.data, titleParam, child));
      })
      .catch((err) => {
        dispatch(getProfileFailure(err));
      });
  }
);
