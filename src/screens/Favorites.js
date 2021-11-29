import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteFavorites} from '../redux/actions';
import PicsLayout from '../components/PicsLayout';
const Favorites = ({navigation}) => {
  const dispatch = useDispatch();
  const savedPhotos = useSelector(state => state.photos.likedPhotos);

  const removeItem = data => {
    let id = data.id;
    return dispatch(deleteFavorites(id));
  };

  const navigateToInfo = data => {
    return navigation.navigate('Details', {data});
  };

  return (
    <View>
      <PicsLayout data={savedPhotos} addItem={removeItem} onNavigate={navigateToInfo} />
    </View>
  );
};

export default Favorites;
