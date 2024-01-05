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
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {scale} from 'react-native-size-matters';

const Circle = ({navigation}) => {
  const [isClicked, setIsClicked] = useState(false);
  const animatedCircleScale = useSharedValue(0);
  const bS = useSharedValue(0);
  const bY = useSharedValue(150);
  const animatedCircle = useAnimatedStyle(() => {
    return {
      transform: [{scale: animatedCircleScale.value}],
    };
  });
  const animatedBottomStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: bY.value}, {scale: bS.value}],
    };
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(1,255,122,0.5)',
          flexDirection: 'row',
          position: 'relative',
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        activeOpacity={2}
        onPress={() => {
          if (isClicked) {
            bS.value = withTiming(0, {duration: 3000});
            bY.value = withTiming(150, {duration: 3000});
            animatedCircleScale.value = withTiming(0, {duration: 3000});
          } else {
            animatedCircleScale.value = withTiming(1, {duration: 3000});
            bS.value = 1;
            bY.value = withTiming(0, {duration: 1500});
          }
          setIsClicked(!isClicked);
        }}>
        <Animated.View
          style={[
            {
              width: scale(150),
              height: scale(150),
              backgroundColor: 'yellow',
              position: 'absolute',
              top: -15,
              right: -30,
              borderRadius: 75,
            },
            animatedCircle,
          ]}
        />

        <Animated.View
          style={[
            {bottom: -50, flexDirection: 'row', position: 'absolute'},
            animatedBottomStyle,
          ]}>
          <View>
            <View
              style={{
                width: scale(150),
                height: scale(150),
                backgroundColor: '#8E462D',
                transform: [{rotate: '45deg'}],
              }}
            />
            <View
              style={{
                width: scale(20),
                height: scale(20),
                borderRadius: scale(10),
                backgroundColor: '#B36D4F',
                position: 'absolute',
                top: 10,
                right: 50,
              }}
            />
            <View
              style={{
                width: scale(10),
                height: scale(10),
                borderRadius: scale(5),
                backgroundColor: '#B36D4F',
                position: 'absolute',
                top: 40,
                left: 50,
              }}
            />
            <View
              style={{
                width: scale(20),
                height: scale(20),
                borderRadius: scale(10),
                backgroundColor: '#B36D4F',
                position: 'absolute',
                top: 50,
                right: 40,
              }}
            />
          </View>
          <View>
            <View
              style={{
                width: scale(80),
                height: scale(80),
                backgroundColor: '#8E462D',
                transform: [{rotate: '45deg'}],
                bottom: -50,
              }}
            />

            <View
              style={{
                width: scale(10),
                height: scale(10),
                borderRadius: scale(5),
                backgroundColor: '#B36D4F',
                position: 'absolute',
                top: 50,
                left: 30,
              }}
            />
          </View>
          <View>
            <View
              style={{
                width: scale(150),
                height: scale(150),
                backgroundColor: '#8E462D',
                transform: [{rotate: '45deg'}],
              }}
            />

            <View
              style={{
                width: scale(20),
                height: scale(20),
                borderRadius: scale(10),
                backgroundColor: '#B36D4F',
                position: 'absolute',
                top: 10,
                right: 50,
              }}
            />
            <View
              style={{
                width: scale(10),
                height: scale(10),
                borderRadius: scale(5),
                backgroundColor: '#B36D4F',
                position: 'absolute',
                top: 40,
                left: 50,
              }}
            />
            <View
              style={{
                width: scale(20),
                height: scale(20),
                borderRadius: scale(10),
                backgroundColor: '#B36D4F',
                position: 'absolute',
                top: 50,
                right: 40,
              }}
            />
          </View>
        </Animated.View>
        {/* </View> */}
      </TouchableOpacity>
    </View>
  );
};

export default Circle;
