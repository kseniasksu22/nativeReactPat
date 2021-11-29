import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorites from '../screens/Favorites';
import Pictures from '../screens/Pictures';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();
const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarIcon: ({color, size}) => {
        if (route.name === 'Favorites') {
          color = '#b62525';
        } else if (route.name === 'Pictures') {
          color = '#72a5bc';
        }

        size = 28;
        const icons = {
          Pictures: 'collections',
          Favorites: 'bookmarks',
          Details: 'info',
        };

        return <Icon name={icons[route.name]} color={color} size={size} />;
      },
    })}>
    <Tab.Screen screenOptions={{header: 'none'}} name="Pictures" component={Pictures} />

    <Tab.Screen name="Favorites" component={Favorites} />
  </Tab.Navigator>
);
