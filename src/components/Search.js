import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Search = ({inputText, setInputText}) => {
  return (
    <View style={styles.searchContainer}>
      <Icon name="search" color="blue" size={25} />
      <TextInput
        placeholder={'sarch'}
        style={styles.searchContainer__input}
        onChangeText={text => setInputText(text)}
        value={inputText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  searchContainer__input: {
    flex: 1,
    borderBottomColor: '#909090',
    borderBottomWidth: 0.3,
    paddingLeft: 10,
    color: 'grey',
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
