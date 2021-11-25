import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PicsLayout from '../components/PicsLayout';
import {setPhotos, setFavorites, deleteFavorites} from '../redux/actions';
import Search from '../components/Search';

const Pictures = ({navigation}) => {
  const [inputText, setInputText] = React.useState('');
  const dispatch = useDispatch();
  const photosList = useSelector(state => state.list);
  const savedList = useSelector(state => state.likedPhotos);
  const [albumIndex, setAlbumIndex] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);
  console.log(albumIndex);
  const getPictures = () => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumIndex}`)
      .then(res => res.json())
      .then(res => {
        return dispatch(setPhotos(res));
      });
  };
  React.useEffect(() => {
    getPictures();
  }, [albumIndex]);

  const navigateToInfo = data => {
    navigation.navigate('Details', {data});
  };

  const findPicture = (items, text) => {
    if (!text) {
      return items;
    }

    return items.filter(res => {
      return res.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
    });
  };

  const addItem = data => {
    if (!data.liked) {
      return dispatch(setFavorites({...data, liked: true}));
    } else if (data.liked) {
      return dispatch(deleteFavorites(data.id));
    } else {
      return;
    }
  };

  const visibleItems = findPicture(
    photosList.map(obj => savedList.find(o => o.id === obj.id) || obj),
    inputText,
  );
  const handleLoadMore = () => {
    setAlbumIndex(prevState => prevState + 1);
    setIsLoading(false);
  };
  const footerList = () => {
    return (
      <View>
        <ActivityIndicator loading={isLoading} size="large" color="##000000" />
      </View>
    );
  };

  return (
    <View>
      <Search inputText={inputText} setInputText={setInputText} />
      <PicsLayout
        data={visibleItems}
        onRefresh={getPictures}
        addItem={addItem}
        onNavigate={navigateToInfo}
        handleLoadMore={handleLoadMore}
        listFooter={footerList}
      />
    </View>
  );
};
//infinitstore

export default Pictures;
