import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './src/redux/store';
import store from './src/redux/store';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StackNavigator from './src/navigation/MainNavigator';

Icon.loadFont();

const App = function () {
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
