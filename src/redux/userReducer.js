const initialState = {
  user: {},
  isLogged: false,
};

export const LOGIN = 'LOGIN';
export const LOGGED = 'LOGGED';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: Object.assign(state.user, action.payload),
      };
    case 'LOGGED':
      return {
        ...state,
        isLogged: action.payload,
      };
    default:
      return state;
  }
};
