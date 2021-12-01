import React from 'react';
import {Animated, Easing} from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
const AnimatedList = () => {
  const [initialValue, setInitialValue] = React.useState(new Animated.Value(0));
  const [pics, setPics] = React.useState([]);
  React.useEffect(() => {
    Animated.loop(
      Animated.timing(initialValue, {
        toValue: 70,
        duration: 60000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [initialValue]);

  const slideValue = initialValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -50],
  });

  const getPictures = () => {
    fetch('https://picsum.photos/v2/list?page=2&limit=100')
      .then(res => res.json())
      .then(res => {
        //if (!res) {
        //Animated.timing().stop();
        // }
        setPics(res);
      });
  };

  React.useEffect(() => {
    getPictures();
  }, []);

  return (
    <MasonryList
      numColumns={3}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      data={pics}
      renderItem={({item}) => (
        <Animated.Image
          key={item.id}
          style={{
            borderRadius: 20,
            height: Math.floor(Math.random() * 100 + 80),
            transform: [{translateY: slideValue}],
            margin: 3,
          }}
          source={{uri: item.download_url}}
        />
      )}
    />
  );
};

export default AnimatedList;
