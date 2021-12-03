import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AnimatedList from '../components/AnimatedList';
//import Loadable from 'react-loadable';

const RootScreen = ({navigation}) => {
  //const LoadableComponent = Loadable({
  //loader: () => import('../components/AnimatedList'),
  // loading: () => <Text>jbjjj</Text>,
  //});

  return (
    <View style={styles.rootScreen}>
      <AnimatedList />
      <LinearGradient
        colors={['transparent', 'transparent', '#000000', '#000000']}
        style={styles.rootScreen__gradienContainer}>
        <View style={styles.rootScreen__logo}>
          <Text style={styles.rootScreen__logoText}>P</Text>
        </View>
        <Text style={styles.rootScreen__title}>Welcome to Pinterest!</Text>
        <Pressable
          onPress={() => navigation.navigate('Login')}
          style={[styles.rootScreen__button, styles.rootScreen__button_color]}>
          <Text style={styles.rootScreen__buttonText}>Login</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('RegisterEmail')}
          style={styles.rootScreen__button}>
          <Text style={styles.rootScreen__buttonText}>Register</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: 'black',
    paddingBottom: 20,
  },
  rootScreen__gradienContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  rootScreen__logo: {
    backgroundColor: 'red',
    borderRadius: 50,
  },
  rootScreen__logoText: {
    width: 95,
    fontSize: 80,
    color: 'white',
    textAlign: 'center',
  },
  rootScreen__title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    width: 200,
    textAlign: 'center',
    paddingBottom: 20,
    paddingTop: 15,
  },
  rootScreen__button: {
    borderRadius: 20,
    textAlign: 'center',
    padding: 10,
    width: '95%',
  },
  rootScreen__buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rootScreen__button_color: {
    backgroundColor: 'red',
  },
});

export default RootScreen;
