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
  ScrollView,
} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';

import Animated, {
  Easing,
  FadeInUp,
  RotateInDownLeft,
  FadeInDown,
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  useAnimatedGestureHandler,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {scale} from 'react-native-size-matters';

const Shopping = ({navigation}) => {
  const x = useSharedValue(5);
  const animatedGestureHandler = useAnimatedGestureHandler({
    onActive: e => {
      x.value = e.translationX;
    },
    onEnd: e => {
      if (x.value < 150) x.value = withSpring(5);
      else x.value = withSpring(220);
    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {transform: [{translateX: x.value}]};
  });

  const arrowStyle1 = useAnimatedStyle(() => {
    return {
      opacity: withRepeat(
        withSequence(
          withTiming(0.5, {duration: 500}),
          withTiming(1, {duration: 1000}),
        ),
        1000,
        true,
        () => {},
        1,
      ),
    };
  });
  const arrowStyle2 = useAnimatedStyle(() => {
    return {
      opacity: withRepeat(
        withSequence(
          withTiming(0.5, {duration: 1000}),
          withTiming(1, {duration: 1500}),
        ),
        1000,
        true,
        () => {},
        1,
      ),
    };
  });
  const arrowStyle3 = useAnimatedStyle(() => {
    return {
      opacity: withRepeat(
        withSequence(
          withTiming(0.5, {duration: 1000}),
          withTiming(1, {duration: 500}),
        ),
        500,
        true,
        () => {},
        1,
      ),
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(x.value, [0, 150], [0.8, 0], Extrapolate.CLAMP),
      // transform: [
      //   {
      //     translateX: interpolate(
      //       x.value,
      //       [0, 150],
      //       [0, 200, Extrapolate.CLAMP],
      //     ),
      //   },
      // ],
    };
  });
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'black',
          height: '60%',
          width: '100%',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: '95%',
            width: scale(50),
            backgroundColor: 'white',
            borderTopRightRadius: 30,
          }}
        />

        <Image
          source={require('../assests/lady.png')}
          style={{
            height: '80%',
            width: '60%',
            resizeMode: 'contain',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        />
        <View
          style={{
            height: '95%',
            width: scale(50),
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
          }}
        />
      </View>
      <View style={{backgroundColor: 'white', height: '40%', width: '100%'}}>
        <View
          style={{
            backgroundColor: 'white',
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 15,
          }}>
          <View style={{paddingHorizontal: scale(15)}}>
            <Text
              style={{
                color: 'black',
                fontSize: scale(40),
                textAlign: 'center',
                fontWeight: '600',
              }}>
              Find The Best Collection
            </Text>
            <Text
              style={{
                color: 'gray',
                fontSize: scale(12),
                textAlign: 'center',
                lineHeight: 20,
                marginVertical: 10,
              }}>
              Paragraphs are the building blocks of papers. Many students define
              paragraphs in terms of length
            </Text>
          </View>
          <View
            style={{
              height: scale(50),
              width: scale(300),
              backgroundColor: 'black',
              marginTop: scale(10),
              borderRadius: scale(10),
              padding: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <PanGestureHandler onGestureEvent={animatedGestureHandler}>
              <Animated.View
                style={[
                  {
                    backgroundColor: '#FF7135',
                    height: '100%',
                    width: scale(70),
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 5,
                    left: 0,
                  },
                  animatedStyle,
                ]}>
                <Text style={{color: 'white', fontSize: scale(30)}}>{'>'}</Text>
              </Animated.View>
            </PanGestureHandler>
            <View style={{flexDirection: 'row'}}>
              <Animated.Text
                style={[
                  {color: '#FF7135', fontSize: scale(16), marginLeft: 20},
                  textStyle,
                ]}>
                {'Swipe to Start'}
              </Animated.Text>
              <Animated.Text
                style={[{color: '#fff', fontSize: scale(16)}, arrowStyle1,textStyle]}>
                {'>'}
              </Animated.Text>
              <Animated.Text
                style={[{color: '#fff', fontSize: scale(16)}, arrowStyle2,textStyle]}>
                {'>'}
              </Animated.Text>
              <Animated.Text
                style={[{color: '#fff', fontSize: scale(16)}, arrowStyle3,textStyle]}>
                {'>'}
              </Animated.Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Shopping;
