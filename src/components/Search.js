import React from 'react';
import {View, TextInput, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <TextInput style={styles.searchContainer__input} />
      <Pressable onPress={() => console.log('lol')} style={styles.searchContainer__button}>
        <Icon name="search" color="blue" size={25} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  searchContainer__input: {
    width: 280,
    borderBottomColor: '#909090',
    borderBottomWidth: 0.3,
    padding: 2,
  },
  searchContainer__button: {
    width: 50,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    borderRadius: 20,
    padding: 1,
  },
});

export default Search;
