const initialState = {
  user: {},
};

export const LOGIN = 'LOGIN';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
