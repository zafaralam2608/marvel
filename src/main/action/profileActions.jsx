import axios from 'axios';
import { loadProfile } from '../constant/type';
import { buildParams } from '../util/apiUtility';

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

export function getProfileSuccess(payload) {
  return {
    type: loadProfile.success,
    payload,
  };
}

export const getProfile = (id) => (
  (dispatch) => {
    dispatch(getProfilePending());
    return axios.get(`/characters/${id}`, {
      params: buildParams(),
    })
      .then((response) => {
        dispatch(getProfileSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getProfileFailure(err));
      });
  }
);
