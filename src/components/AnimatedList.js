import React, {useCallback} from 'react';
import {Animated, Easing, View, Text} from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';

//import {ImagesLoadedWrapper, Image} from 'react-native-images-loaded';
const AnimatedList = () => {
  const [isLoading, setIsLoading] = React.useState(0);
  //console.log(isLoading, 'lolol');
  const [initialValue, setInitialValue] = React.useState(new Animated.Value(0));
  const [pics, setPics] = React.useState([]);
  // console.log(pics.length, 'initialarray');
  const [loadedPictures, setLoadedPictures] = React.useState([]);
  // console.log(loadedPictures.length);
  React.useEffect(() => {
    console.log(loadedPictures.length);
    if (loadedPictures.length === 5) {
      console.log('here');
      Animated.loop(
        Animated.timing(initialValue, {
          toValue: 70,
          duration: 60000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
    }
  }, [initialValue, loadedPictures]);

  const slideValue = initialValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -50],
  });

  const getPictures = () => {
    fetch('https://picsum.photos/v2/list?page=2&limit=5')
      .then(res => res.json())
      .then(res => setPics(res));
  };

  React.useEffect(() => {
    getPictures();
  }, []);

  const load = useCallback(() => {
    console.log('test');
    setLoadedPictures(el => [...el, true]);
    // setIsLoading(1);
  }, []);

  //window.load = () => {
  //console.log('done');
  //};

  return (
    <>
      <MasonryList
        numColumns={3}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // opacity: isLoading,
        }}
        data={pics}
        renderItem={({item}) => (
          <Animated.Image
            key={item.id}
            style={{
              borderRadius: 20,
              height: Math.floor(Math.random() * 100 + 80),
              // transform: [{translateY: slideValue}],
              margin: 3,
            }}
            source={{uri: `https://picsum.photos/id/${item.id}/100/100`}}
            //onLoadStart={e => load()}
            onLoadEnd={() => load()}
          />
        )}
      />
    </>
  );
};

export default AnimatedList;
