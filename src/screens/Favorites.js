import React from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteFavorites} from '../redux/actions';
import PicsLayout from '../components/PicsLayout';
const Favorites = () => {
  const dispatch = useDispatch();
  const savedPhotos = useSelector(state => state.likedPhotos);

  const removeItem = data => {
    let id = data.id;
    return dispatch(deleteFavorites(id));
  };

  return (
    <View>
      <PicsLayout data={savedPhotos} addItem={removeItem} />
    </View>
  );
};

export default Favorites;
