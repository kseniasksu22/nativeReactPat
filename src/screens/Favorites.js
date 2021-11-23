import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import PicsLayout from '../components/PicsLayout';
const Favorites = () => {
  const savedPhotos = useSelector(state => state.photos.likedPhotos);
  return (
    <View>
      <PicsLayout data={savedPhotos} />
    </View>
  );
};

export default Favorites;
