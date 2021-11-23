import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';

const Navigator = ({data, onRefresh}) => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
