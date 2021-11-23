import {combineReducers, createStore} from 'redux';
import photosReducer from './photosReducer';
import {persistStore} from 'redux-persist';
const store = createStore(combineReducers({photos: photosReducer}));
export const persistor = persistStore(store);
export default store;
