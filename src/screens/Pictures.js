import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PicsLayout from '../components/PicsLayout';
import {setPhotos, setFavorites} from '../redux/actions';
import Search from '../components/Search';

const Pictures = () => {
  const [inputText, setInputText] = React.useState('');
  const dispatch = useDispatch();
  const photosList = useSelector(state => state.list);

  const savedList = useSelector(state => state.likedPhotos);
  const getPictures = () => {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then(res => res.json())
      .then(res => {
        return dispatch(setPhotos(res));
      });
  };

  React.useEffect(() => {
    getPictures();
  }, []);

  const addItem = data => {
    return dispatch(setFavorites({...data, liked: true}));
  };

  //const filter = data => {
  // if ((data.liked = true)) {
  //  }
  // };

  //function deleteItem(key) {
  //=> {
  // return listLiked.filter(el => el.key !== key);
  //  });
  //}

  const findPicture = (items, text) => {
    if (!text) {
      return items;
    }

    return items.filter(res => {
      return res.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
    });
  };

  const visibleItems = findPicture(
    photosList.map(obj => savedList.find(o => o.id === obj.id) || obj),
    inputText,
  );

  return (
    <View>
      <Search inputText={inputText} setInputText={setInputText} />
      <PicsLayout data={visibleItems} onRefresh={getPictures} addItem={addItem} />
    </View>
  );
};

export default Pictures;
