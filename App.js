import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './src/redux/store';
import store from './src/redux/store';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StackNavigator from './src/navigation/MainNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
Icon.loadFont();

const App = function () {
  const lol = async () => {
    try {
      let value = await AsyncStorage.getItem('user');
      if (value != null) {
        console.log('user');
      } else if (value === null) {
        console.log('nety');
      } else {
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  lol();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar style="auto" />
        <StackNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
