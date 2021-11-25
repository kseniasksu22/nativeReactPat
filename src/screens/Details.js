import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {setFavorites, deleteFavorites} from '../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const Details = ({route, navigation}) => {
  console.log(navigation);
  const dispatch = useDispatch();
  const item = route.params.data;
  const savedList = useSelector(state => state.likedPhotos);
  const visIcon = savedList.filter(el => el.id === item.id);

  const addItem = data => {
    if (visIcon.length === 0) {
      return dispatch(setFavorites({...data, liked: true}));
    } else if (visIcon.length > 0) {
      return dispatch(deleteFavorites(data.id));
    } else {
      return;
    }
  };

  //console.log(visIcon.length);
  return (
    <View style={style.detailsContainer}>
      <Image
        style={style.detailsContainer__image}
        source={{
          uri: item.url,
        }}
      />
      <View style={style.detailsContainerWrapper}>
        <Text style={style.detailsContainer__title}>{item.title.split(' ')[0]}</Text>
        <Icon
          name="bookmark"
          size={40}
          color={visIcon.length ? 'red' : 'grey'}
          onPress={() => addItem(item)}
        />
      </View>
      <Text style={style.detailsContainer__text}>{item.title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  detailsContainer: {
    padding: 30,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer__image: {width: 300, height: 300},
  detailsContainerWrapper: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsContainer__text: {
    paddingTop: 40,
    fontSize: 24,
  },
  detailsContainer__title: {
    fontSize: 20,
  },
});

export default Details;
