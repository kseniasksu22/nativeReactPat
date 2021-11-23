import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Navigator from './src/navigation';

import store from './src/redux/store';

const App = function () {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <Navigator />
    </Provider>
  );
};

export default App;
