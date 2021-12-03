import React from 'react';
import {View, TextInput, Pressable, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../redux/actions';
import {auth} from '../users';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Login = () => {
  const dispatch = useDispatch();
  const [secure, setSecure] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const getUserData = async (em, ps) => {
    try {
      const res = auth(em, ps);
      if (res) {
        dispatch(login(res));
      }
    } catch (e) {
      console.log(e, 'user not found');
    }
  };

  return (
    <View style={styles.login}>
      <Pressable style={[styles.login__button, styles.login__buttonOne]}>
        <Text style={styles.login__buttonText}>Login with Facebook</Text>
      </Pressable>
      <Pressable style={[styles.login__button, styles.login__buttonTwo]}>
        <Text style={styles.login__buttonText}>Login with Google</Text>
      </Pressable>
      <Pressable style={styles.login__button}>
        <Text style={[styles.login__buttonText, styles.login__buttonText_color]}>
          Login with Apple
        </Text>
      </Pressable>
      <Text style={styles.login__switchText}>OR</Text>
      <Text style={styles.login__InputText}>Email adress</Text>
      <TextInput
        style={styles.login__Input}
        label="Email"
        placeholder="
        Type your e-mail here"
        onChangeText={text => setEmail(text)}
        placeholderTextColor={'grey'}
      />
      <Text style={styles.login__InputText}>Pass your password</Text>
      <View style={styles.login__inputWrapper}>
        <TextInput
          style={styles.login__Input}
          label="password"
          placeholder="Type your password here"
          placeholderTextColor={'grey'}
          secureTextEntry={secure}
          maxLength={20}
          onChangeText={text => setPassword(text)}
        />
        <Icon
          onPress={() => {
            setSecure(!secure);
          }}
          name={!secure ? 'visibility' : 'visibility-off'}
          color="white"
          size={25}
        />
      </View>
      <Pressable
        style={[styles.login__button, styles.login__buttonLog]}
        onPress={() => getUserData(email, password)}>
        <Text style={styles.login__buttonText}>Login</Text>
      </Pressable>
      <Text style={styles.login__privacyText}>
        By continue you accepting Pinterest`s privacy policy. (Terms of service and privacy policy)
      </Text>
      <Text style={styles.login__passwordReset}>Forgot your password?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  login__inputWrapper: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  login: {
    padding: 10,
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
  },
  login__button: {
    borderRadius: 20,
    textAlign: 'center',
    padding: 10,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    marginBottom: '2%',
  },
  login__buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  login__buttonOne: {
    backgroundColor: '#6082B6',
  },
  login__buttonTwo: {
    backgroundColor: '#0096FF',
  },
  login__buttonText_color: {
    color: '#000',
  },
  login__switchText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
  },
  login__InputText: {
    color: 'white',
    alignSelf: 'flex-start',
    fontSize: 18,
  },
  login__buttonLog: {
    backgroundColor: 'red',
    marginTop: 20,
  },
  login__Input: {
    alignSelf: 'stretch',
    padding: 10,
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  login__privacyText: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 30,
  },
  login__passwordReset: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Login;
