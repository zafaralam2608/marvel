import axios from 'axios';
import { loadAlbum } from '../constant/type';
import { buildParams } from '../util/apiUtility';

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

export function getItemsSuccess(payload) {
  return {
    type: loadAlbum.success,
    payload,
  };
}

export const getItems = (offset, limit, search) => (
  (dispatch) => {
    dispatch(getItemsPending());
    return axios.get('/characters', {
      params: buildParams(offset, limit, search),
    })
      .then((response) => {
        dispatch(getItemsSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getItemsFailure(err));
      });
  }
);
