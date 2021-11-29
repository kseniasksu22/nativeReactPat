import {combineReducers, createStore} from 'redux';
import photosReducer from './photosReducer';
import userReducer from './userReducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistPhotosConfig = {
  key: 'photos',
  storage: AsyncStorage,
  blacklist: 'list',
};
const rootReducerConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['photos'],
};

const persistedPhotosReducer = persistReducer(persistPhotosConfig, photosReducer);
const reducers = combineReducers({photos: persistedPhotosReducer, userInfo: userReducer});
const persistedRootReducer = persistReducer(rootReducerConfig, reducers);

const store = createStore(persistedRootReducer);
export const persistor = persistStore(store);
// persistor.purge();
export default store;
