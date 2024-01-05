import React, {useEffect, useRef, useState} from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  SafeAreaView,
  useAnimatedValue,
  TouchableOpacity,
  Image,
  Text,
  View,
  Dimensions,
  FlatList,
} from 'react-native'; 
import {scale} from 'react-native-size-matters';
import {SharedElement} from 'react-navigation-shared-element';

const SharedElementPage = ({navigation}) => {
  const [count, setCount] = useState(0);
  const data = [
    'https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
    'https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1547038577-da80abbc4f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1598586958772-8bf368215c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1623006772851-a8bf2c47d304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1618353482480-61ca5a9a7879?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1560009320-c01920eef9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  ];
  return (
    <SafeAreaView style={{flex: 1}} behavior="height">
      <StatusBar barStyle={'dark-content'} />

      <FlatList
        data={data}
        numColumns={2}
        horizontal={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AnimatedImage', {item, index});
              }}>
              <SharedElement id={`image${index}`}>
                <Image
                  source={{
                    uri: item,
                  }}
                  style={[
                    {
                      width: scale(150),
                      height: scale(150),
                      margin: 10,
                    },
                  ]}
                />
              </SharedElement>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default SharedElementPage;
