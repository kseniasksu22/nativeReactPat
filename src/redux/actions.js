import {SET_PHOTOS} from './photosReducer';
import {SET_FAVORITES} from './photosReducer';
import {SET_LIKED_PHOTOS} from './photosReducer';

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

export const setLikedPictures = photos => {
  return {
    type: SET_LIKED_PHOTOS,
    payload: photos,
  };
};
