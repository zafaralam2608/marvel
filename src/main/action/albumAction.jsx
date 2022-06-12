import axios from 'axios';
import { loadAlbum } from '../constant/action';
import { buildAlbumParams } from '../util/apiUtility';
import { apiUrl } from '../constant/route';

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

export function getItemsSuccess(payload, comp) {
  return {
    type: loadAlbum.success,
    payload,
    comp,
  };
}

export const getItems = (comp, offset, limit, search, id, parent) => (
  (dispatch) => {
    dispatch(getItemsPending());
    return axios.get(`${apiUrl}${parent}${id}/${comp.link}`, {
      params: buildAlbumParams(comp, offset, limit, search),
    })
      .then((response) => {
        dispatch(getItemsSuccess(response.data, comp));
      })
      .catch((err) => {
        dispatch(getItemsFailure(err));
      });
  }
);
