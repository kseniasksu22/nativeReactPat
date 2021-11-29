import React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import {logState} from '../redux/actions';
const UserDetails = () => {
  const userData = useSelector(state => state.userInfo.user);
  const dispatch = useDispatch();
  return (
    <View style={styles.userDetails}>
      <Icon name="person" size={30} color={'#809DA6'} />
      <View style={styles.userDetailsWrapper}>
        <Text style={styles.userDetails__info}>General information</Text>
        <Text>Nickname : {userData.username}</Text>
        <Text>Firstname: {userData.firstName}</Text>
        <Text>LastName: {userData.lastName}</Text>
        <Text>Age: {userData.age}</Text>
      </View>
      <Pressable style={styles.userDetails__button} onPress={() => dispatch(logState(false))}>
        <Text style={styles.userDetails__logotText}>Log Out</Text>
        <Icon name="logout" size={20} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  userDetails: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 50,
  },
  userDetails__button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 80,
    backgroundColor: '#A6808A',
    padding: 2,
    borderRadius: 8,
  },
  userDetails__info: {
    fontSize: 20,
    padding: 10,
  },
  userDetailsWrapper: {
    paddingBottom: 450,
  },
  userDetails__logotText: {
    color: 'white',
  },
});

export default UserDetails;
