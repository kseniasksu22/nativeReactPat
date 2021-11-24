const initialState = {
  list: [],
  likedPhotos: [],
};

console.log(initialState.likedPhotos, 'likedPhotos');

export const SET_PHOTOS = 'SET_PHOTOS';
export const SET_FAVORITES = 'SET_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PHOTOS': {
      return {
        ...state,
        list: action.payload,
      };
    }
    case 'SET_LIKED_PHOTOS': {
      return {
        ...state,
      };
    }
    case 'SET_FAVORITES': {
      return {
        ...state,
        likedPhotos: [...state.likedPhotos, action.payload],
      };
    }
    case 'REMOVE_FROM_FAVORITES': {
      return {
        ...state,
        likedPhotos: [...state.likedPhotos.filter(el => el.id !== action.payload)],
      };
    }

    default:
      return state;
  }
};
