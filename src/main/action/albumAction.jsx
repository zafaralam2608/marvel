import axios from 'axios';
import { loadAlbum } from '../constant/action';
import { API_URL, buildParams } from '../util/apiUtility';

export function getItemsPending() {
  return {
    type: loadAlbum.pending,
  };
}

export function getItemsFailure(payload) {
  return {
    type: loadAlbum.failure,
    payload,
  };
}

export function getItemsSuccess(payload, t) {
  return {
    type: loadAlbum.success,
    payload,
    t,
  };
}

export const getItems = (apiLink, params, t) => (
  (dispatch) => {
    dispatch(getItemsPending());
    return axios.get(`${API_URL}${apiLink}`, {
      params: buildParams(params),
    })
      .then((response) => {
        dispatch(getItemsSuccess(response.data, t));
      })
      .catch((err) => {
        dispatch(getItemsFailure(err));
      });
  }
);
