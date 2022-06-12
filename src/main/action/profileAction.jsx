import axios from 'axios';
import { loadProfile } from '../constant/action';
import { buildParams } from '../util/apiUtility';
import { apiUrl } from '../constant/route';

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

export function getProfileSuccess(payload, comp) {
  return {
    type: loadProfile.success,
    payload,
    comp,
  };
}

export const getProfile = (comp, id) => (
  (dispatch) => {
    dispatch(getProfilePending());
    return axios.get(`${apiUrl}/${comp.link}/${id}`, {
      params: buildParams(),
    })
      .then((response) => {
        dispatch(getProfileSuccess(response.data, comp));
      })
      .catch((err) => {
        dispatch(getProfileFailure(err));
      });
  }
);
