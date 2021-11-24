import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import PicsLayout from '../components/PicsLayout';
const Favorites = () => {
  const savedList = useSelector(state => state.likedPhotos);
  console.log(savedList);
  const removeItem = data => {
    savedList.filter(element => {
      return element.id !== data.id;
    });
  };

  const savedPhotos = useSelector(state => state.likedPhotos);
  return (
    <View>
      <PicsLayout data={savedPhotos} addItem={removeItem} />
    </View>
  );
};

export default Favorites;
