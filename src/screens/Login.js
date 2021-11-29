import React from 'react';
import {View, TextInput, Pressable, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {login, logState} from '../redux/actions';
import {auth} from '../users';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const getUserData = (em, ps) => {
    const res = auth(em, ps);
    if (res) {
      return dispatch(login(res)), dispatch(logState(true));
    }
  };

  return (
    <View style={styles.login}>
      <TextInput
        style={styles.login__input}
        placeholder="type your email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.login__input}
        placeholder="type your password"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <Pressable style={styles.login__button} onPress={() => getUserData(email, password)}>
        <Text style={styles.login__buttonText}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login__input: {
    padding: 10,
    borderBottomWidth: 1,
    width: 200,
    borderColor: '#e5e5ff',
  },
  login__button: {
    width: 70,
    backgroundColor: '#6666ff',
    marginTop: 15,
    padding: 3,
    borderRadius: 10,
  },
  login__buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Login;
