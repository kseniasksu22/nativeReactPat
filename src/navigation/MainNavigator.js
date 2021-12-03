import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import RootScreen from '../screens/RootScreen';
import Login from '../screens/Login';
import Register from '../screens/Register';
import {useSelector} from 'react-redux';
import DrawerUserNavigator from './DrawerNavigator';

import Icon from 'react-native-vector-icons/MaterialIcons';
const Stack = createStackNavigator();
const MainNavigator = () => {
  const isLogged = useSelector(state => state.userInfo.user);
  const onEmailSubmit = data => {
    data.navigate('RegisterPassword');
  };

  const onPasswordSubmit = data => {
    data.navigate('AgeRegister');
  };

  return (
    <NavigationContainer>
      {isLogged.username ? (
        <DrawerUserNavigator />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="TabNavigator" component={RootScreen} options={{headerShown: false}} />
          <Stack.Screen
            options={({navigation, route}) => ({
              ...TransitionPresets.ModalSlideFromBottomIOS,
              headerStyle: {
                backgroundColor: '#000',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerLeft: () => (
                <Icon name="close" onPress={() => navigation.goBack()} color="white" size={35} />
              ),
            })}
            name="Login"
            component={Login}
            //options={{headerShown: false}}
          />
          <Stack.Screen
            options={({navigation, route}) => ({
              title: 'Register',
              ...TransitionPresets.ModalSlideFromBottomIOS,
              headerStyle: {
                backgroundColor: '#000',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerLeft: () => (
                <Icon
                  name="chevron-left"
                  onPress={() => navigation.goBack()}
                  color="white"
                  size={40}
                />
              ),
            })}
            name="RegisterEmail"

            //options={{headerShown: false}}
          >
            {({navigation}) => (
              <Register
                title="Pass your email adress below"
                placeholder="Email adress"
                onRegisterSubmit={() => onEmailSubmit(navigation)}
                position={'34%'}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            options={({navigation, route}) => ({
              title: 'Register',

              headerStyle: {
                backgroundColor: '#000',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerLeft: () => (
                <Icon
                  name="chevron-left"
                  onPress={() => navigation.goBack()}
                  color="white"
                  size={40}
                />
              ),
            })}
            name="RegisterPassword"

            //options={{headerShown: false}}
          >
            {({navigation}) => (
              <Register
                title="Pass your password below"
                placeholder="Password"
                position={'64%'}
                onRegisterSubmit={() => onPasswordSubmit(navigation)}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            options={({navigation, route}) => ({
              title: 'Register',

              headerStyle: {
                backgroundColor: '#000',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerLeft: () => (
                <Icon
                  name="chevron-left"
                  onPress={() => navigation.goBack()}
                  color="white"
                  size={40}
                />
              ),
            })}
            name="AgeRegister"

            //options={{headerShown: false}}
          >
            {() => <Register title="How old are you?" placeholder="Age" position={'100%'} />}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default MainNavigator;
