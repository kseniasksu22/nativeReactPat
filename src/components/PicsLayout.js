import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

const PicsLayout = ({data, addItem, onRefresh}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <ListItem style={styles.picsLayoutContainer}>
          <Avatar style={styles.picsLayoutContainer__image} source={{uri: item.url}} />
          <ListItem.Content>
            <ListItem.Title style={styles.picsLayoutContainer__caption}>
              {item.title}
            </ListItem.Title>
            <Icon
              style={styles.picsLayoutContainer__like}
              name="bookmark"
              size={25}
              color={item.liked ? '#990000' : '#C8C8C8'}
              onPress={() => addItem(item)}
            />
          </ListItem.Content>
        </ListItem>
      )}
      keyExtractor={item => item.id}
      refreshing={false}
      onRefresh={onRefresh}
    />
  );
};

const styles = StyleSheet.create({
  picsLayoutContainer: {
    padding: 5,
  },
  picsLayoutContainer__image: {
    width: 150,
    height: 100,
  },
  picsLayoutContainer__item: {
    width: 170,
  },
  picsLayoutContainer__like: {
    alignSelf: 'flex-end',
  },
  picsLayoutContainer__caption: {
    height: 80,
  },
});

export default PicsLayout;
