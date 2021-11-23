import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PicsLayout from '../components/PicsLayout';
import {setPhotos, setFavorites} from '../redux/actions';
import Search from '../components/Search';

const Pictures = () => {
  const dispatch = useDispatch();
  const photosList = useSelector(state => state.photos.list);

  const savedList = useSelector(state => state.photos.likedPhotos);
  const getPictures = () => {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then(res => res.json())
      .then(res => {
        return dispatch(setPhotos(res));
      });
  };

  //{...obj, liked: true};

  React.useEffect(() => {
    getPictures();
  }, []);

  const addItem = data => {
    return dispatch(setFavorites({...data, liked: true}));
  };

  const visibleItems = photosList.map(obj => savedList.find(o => o.id === obj.id) || obj);

  return (
    <View>
      <Search />
      <PicsLayout data={visibleItems} onRefresh={getPictures} addItem={addItem} />
    </View>
  );
};

export default Pictures;
