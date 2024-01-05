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
import {SharedElement} from 'react-navigation-shared-element';

const AnimatedImage = ({navigation, route}) => {
  const {item, index} = route.params;
  const [count, setCount] = useState(0);
  const animatedX = useSharedValue(0);
  const animatedY = useSharedValue(0);
  const borderRadiusScale = useSharedValue(0);
  const countScale = useSharedValue(1);
  const countScale2 = useSharedValue(1);
  const imageScale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      borderRadius: borderRadiusScale.value,
      transform: [
        {translateX: animatedX.value},
        {translateY: animatedY.value},
        {scale: imageScale.value},
      ],
    };
  });
  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{scale: countScale2.value}],
    };
  });
  const animatedImage = useAnimatedStyle(() => {
    return {
      transform: [{scale: imageScale.value}],
    };
  });

  useEffect(() => {
    // imageScale.value = withTiming(1, {duration: 500, easing: Easing.bezier});
  });
  return (
    <ScrollView style={{flex: 1}} behavior="height">
      <StatusBar barStyle={'dark-content'} />
      <View>
        <SharedElement id={`image${index}`}>
          <Animated.Image
            source={{
              uri: item,
            }}
            style={[
              {
                width: '100%',
                height: scale(320),
                resizeMode: 'cover',
              },
            ]}
          />
        </SharedElement>

        <View
          style={{
            backgroundColor: 'white',
            position: 'absolute',
            top: 20,
            right: 10,
            borderRadius: 20,
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              color: 'black',
            }}>
            Count :
          </Text>
          <Animated.View
            style={[
              {
                backgroundColor: 'gray',
                borderRadius: scale(30),
                height: 30,
                width: 30,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
              },
              animatedStyle2,
            ]}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
              }}>
              {count}
            </Text>
          </Animated.View>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          padding: scale(10),
          paddingEnd: 0,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: scale(20),
            color: '#000',
            fontWeight: '800',
            width: '100%',
          }}>
          Car Dekho
        </Text>
        <Text style={{fontSize: scale(20), color: '#000', fontWeight: '800'}}>
          Description:
          <Text style={{fontSize: scale(16), color: '#000', fontWeight: '400'}}>
            {`\n\tIt’s not just the specifications that are changing, either. Much has been made of permutations to Google’s algorithms, which are beginning to favor better written, more authoritative content (and making work for the growing content strategy industry). Google’s bots are now charged with asking questions like, “Was the article edited well, or does it appear sloppy or hastily produced?” and “Does this article provide a complete or comprehensive description of the topic?,” the sorts of questions one might expect to be posed by an earnest college professor.`}
          </Text>
        </Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            padding: scale(10),
            borderWidth: 2,
            width: '90%',
            margin: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            marginTop: 0,
          }}
          onPress={() => {
            borderRadiusScale.value = 0;
            imageScale.value = 1;
            imageScale.value = withTiming(0.1, {
              duration: 1500,
            });

            animatedX.value = withTiming(160, {duration: 1500});
            animatedY.value = withTiming(-120, {duration: 1500});
            borderRadiusScale.value = withTiming(170, {duration: 1200});
            setTimeout(() => {
              setCount(count + 1);
              imageScale.value = 0;
              animatedX.value = withTiming(0);
              animatedY.value = withTiming(0);
            }, 1500);
          }}>
          <Text style={{fontSize: scale(20), color: 'white'}}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AnimatedImage;
