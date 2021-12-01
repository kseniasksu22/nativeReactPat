import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PicsLayout from '../components/PicsLayout';
import {setPhotos, setFavorites, deleteFavorites} from '../redux/actions';
import Search from '../components/Search';

const Pictures = ({navigation}) => {
  const [inputText, setInputText] = React.useState('');
  const dispatch = useDispatch();
  const photosList = useSelector(state => state.photos.list);
  const savedList = useSelector(state => state.photos.likedPhotos);
  const [nextPage, setNextPage] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  const getPictures = () => {
    console.log(nextPage, currentPage);
    if (nextPage === currentPage) {
      return null;
    }
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${nextPage}`)
      .then(res => res.json())
      .then(res => {
        dispatch(setPhotos(res, photosList));
        setCurrentPage(nextPage);
        setIsLoading(false);
      });
  };
  React.useEffect(() => {
    getPictures();
  }, [nextPage]);

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
    setIsLoading(true);
    setNextPage(prevState => prevState + 1);
  };
  const footerList = () => {
    return (
      <View>
        <ActivityIndicator animating={isLoading} size="large" color="##000000" />
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

export default Pictures;
