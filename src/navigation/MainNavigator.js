import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login';
import {useSelector} from 'react-redux';
import DrawerUserNavigator from './DrawerNavigator';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
const StackNavigator = () => {
  const isLogged = useSelector(state => state.userInfo.isLogged);

  return (
    <NavigationContainer>
      {isLogged ? (
        <DrawerUserNavigator />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="TabNavigator" component={Login} options={{headerShown: false}} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default StackNavigator;
