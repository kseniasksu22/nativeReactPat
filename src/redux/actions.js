import {SET_PHOTOS} from './photosReducer';
import {SET_FAVORITES} from './photosReducer';
import {REMOVE_FROM_FAVORITES} from './photosReducer';
import {LOGIN} from './userReducer';
import {LOGGED} from './userReducer';

export const setPhotos = (photos, list) => {
  const allPhotos = [...list, ...photos];
  return {
    type: SET_PHOTOS,
    payload: allPhotos,
  };
};

export const setFavorites = photos => {
  return {
    type: SET_FAVORITES,
    payload: photos,
  };
};

export const deleteFavorites = id => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id,
  };
};

export const login = data => {
  return {
    type: LOGIN,
    payload: data,
  };
};

export const logState = data => {
  return {
    type: LOGGED,
    payload: data,
  };
};
