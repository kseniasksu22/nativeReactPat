import React from 'react';
import {TextInput, View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Register = ({title, placeholder, onRegisterSubmit, position, data}) => {
  const [textInput, setTextInut] = React.useState('');

  return (
    <View style={styles.register}>
      <Text style={styles.register__title}>{title}</Text>
      <View style={styles.register__inputWrapper}>
        <TextInput
          style={styles.register__input}
          onChangeText={text => setTextInut(text)}
          placeholder={placeholder}
          placeholderTextColor={'grey'}
        />
        <Icon
          onPress={() => {
            setTextInut(!textInput);
          }}
          name={textInput ? 'cancel' : null}
          color="grey"
          size={25}
        />
      </View>
      <Text style={styles.register__slideCounter}>1 of 3</Text>
      <View
        style={{
          backgroundColor: 'grey',
          borderRadius: 20,
          marginBottom: 20,
        }}>
        <View style={{backgroundColor: 'white', padding: 5, borderRadius: 20, width: position}} />
      </View>
      <Pressable style={styles.register__button} onPress={() => onRegisterSubmit(data)}>
        <Text style={styles.register__buttonText}>Next</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  register__buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  register__button: {
    borderRadius: 25,
    textAlign: 'center',
    padding: 15,
    alignSelf: 'stretch',
    backgroundColor: 'red',
    marginBottom: '2%',
  },
  register__title: {
    paddingRight: '20%',
    color: 'white',
    fontSize: 50,
    fontWeight: 'normal',
    paddingBottom: 10,
  },
  register__inputWrapper: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  register__input: {
    color: 'white',
    alignSelf: 'stretch',
    fontSize: 24,
  },
  register: {
    backgroundColor: '#000',
    flex: 1,
    padding: 10,
  },
  register__slideCounter: {
    color: 'white',
    alignSelf: 'flex-end',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});

export default Register;
