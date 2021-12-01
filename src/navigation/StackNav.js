import React from 'react';
import Details from '../screens/Details';
import TabNavigator from './TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Icon from 'react-native-vector-icons/MaterialIcons';

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}} />
      <Stack.Screen
        options={({navigation, route}) => ({
          title: route.params.data.title.split(' ')[0],
          headerLeft: () => (
            <Icon
              name="chevron-left"
              onPress={() => navigation.goBack()}
              title="Info"
              color="grey"
              size={40}
            />
          ),
        })}
        name="Details"
        component={Details}
      />
    </Stack.Navigator>
  );
};
export default StackNav;
