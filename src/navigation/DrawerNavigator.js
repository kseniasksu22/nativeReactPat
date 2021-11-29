import React from 'react';
import UserDetails from '../screens/userDetails';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNav from './StackNav';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function DrawerUserNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Pictures"
        component={StackNav}
        options={({route}) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Pictures';
          if (routeName === 'Details') {
            return {headerShown: false};
          }
        }}
      />
      <Drawer.Screen name="User" component={UserDetails} />
    </Drawer.Navigator>
  );
}

export default DrawerUserNavigator;
