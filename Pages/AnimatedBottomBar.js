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
} from 'react-native-reanimated';
import {scale} from 'react-native-size-matters';

const AnimatedBottomBar = ({navigation}) => {
  const {width, height} = Dimensions.get('screen');
  const [count, setCount] = useState(0);
  const animatedX = useSharedValue(0);
  const animatedY = useSharedValue(0);
  const countScale = useSharedValue(1);
  const countScale2 = useSharedValue(1);
  const countScale3 = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animatedX.value}, {translateY: animatedY.value}],
    };
  });
  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: countScale.value}],
    };
  });
  const animatedText1Style = useAnimatedStyle(() => {
    return {
      transform: [{scale: countScale2.value}],
    };
  });
  const animatedText2Style = useAnimatedStyle(() => {
    return {
      transform: [{scale: countScale3.value}],
    };
  });
  useEffect(() => {
    if (count == 0) {
      animatedY.value = withTiming(-100, {duration: 700});
      setTimeout(() => {
        animatedX.value = withSpring(-12, {duration: 700});
        animatedY.value = withTiming(0, {duration: 700});
        countScale.value = withSpring(0.5);
        setTimeout(() => {
          countScale.value = withSpring(1);
        }, 1000);
      }, 1000);
    } else if (count == 1) {
      animatedY.value = withTiming(-100, {duration: 700});
      setTimeout(() => {
        animatedX.value = withSpring(85, {duration: 700});
        animatedY.value = withTiming(0, {duration: 700});
        countScale2.value = withSpring(0.5);
        setTimeout(() => {
          countScale2.value = withSpring(1);
        }, 1000);
      }, 1000);
    } else {
      animatedY.value = withTiming(-100, {duration: 700});
      setTimeout(() => {
        animatedX.value = withSpring(180, {duration: 700});
        animatedY.value = withTiming(0, {duration: 700});
        countScale3.value = withSpring(0.5);
        setTimeout(() => {
          countScale3.value = withSpring(1);
        }, 1000);
      }, 1000);
    }
  }, [count]);

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />

      <View
        style={{
          width: width,
          height: scale(60),
          backgroundColor: '#96DFF7',
          borderWidth: 0.5,
          position: 'absolute',
          elevation: 10,
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          alignItems: 'center',
          bottom: 10,
        }}>
        <Animated.View
          style={[
            {
              backgroundColor: 'yellow',
              height: 45,
              width: 45,
              borderRadius: 45 / 2,
              position: 'absolute',
            },
            animatedStyle,
          ]}></Animated.View>
        <TouchableOpacity
          style={{}}
          onPress={() => {
            setCount(0);
          }}>
          <Animated.Text
            style={[{fontSize: 35, color: 'black'}, animatedTextStyle]}>
            A
          </Animated.Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{}}
          onPress={() => {
            setCount(1);
          }}>
          <Animated.Text
            style={[{fontSize: 35, color: 'black'}, animatedText1Style]}>
            B
          </Animated.Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{}}
          onPress={() => {
            setCount(2);
          }}>
          <Animated.Text
            style={[{fontSize: 35, color: 'black'}, animatedText2Style]}>
            C
          </Animated.Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AnimatedBottomBar;
