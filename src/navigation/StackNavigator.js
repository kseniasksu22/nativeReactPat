import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Details from '../screens/Details';
import TabNavigator from './TabNavigator';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
