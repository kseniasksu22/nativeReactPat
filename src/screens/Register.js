import React from 'react';
import {TextInput, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Register = () => {
  const [textInput, setTextInut] = React.useState('');
  return (
    <View style={{backgroundColor: '#000', flex: 1, padding: 10}}>
      <Text
        style={{
          paddingRight: '20%',
          color: 'white',
          fontSize: 50,
          fontWeight: 'normal',
          paddingBottom: 10,
        }}>
        Pass your email adress below
      </Text>
      <View
        style={{
          alignSelf: 'stretch',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 10,
        }}>
        <TextInput
          style={{
            color: 'white',
            alignSelf: 'stretch',
            fontSize: 24,
          }}
          onChangeText={text => setTextInut(text)}
          placeholder="email adress"
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
      <Text
        style={{
          color: 'white',
          alignSelf: 'flex-end',
          fontSize: 16,
          fontWeight: 'bold',
        }}>
        1 of 3
      </Text>
    </View>
  );
};

export default Register;
