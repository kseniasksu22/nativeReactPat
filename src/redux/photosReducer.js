const initialState = {
  list: [],
  renderLikedList: [],
  likedPhotos: [],
};

console.log(initialState.likedPhotos, 'likedPhotos');

export const SET_PHOTOS = 'SET_PHOTOS';
export const SET_FAVORITES = 'SET_FAVORITES';
export const SET_LIKED_PHOTOS = 'SET_LIKED_PHOTOS';

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

    default:
      return state;
  }
};
