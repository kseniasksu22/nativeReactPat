import {SET_PHOTOS} from './photosReducer';
import {SET_FAVORITES} from './photosReducer';
import {REMOVE_FROM_FAVORITES} from './photosReducer';
export const setPhotos = photos => {
  return {
    type: SET_PHOTOS,
    payload: photos,
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
