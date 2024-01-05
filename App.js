/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native'; 
const Stack = createSharedElementStackNavigator();
import {createDrawerNavigator} from '@react-navigation/drawer'; 
import AnimatedBottomBar from './Pages/AnimatedBottomBar';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import SharedElementPage from './Pages/SharedElementPage'; 
import AnimatedText from './Pages/AnimatedText';
import Shopping from './Pages/Shopping';
import AnimatedImage from './Pages/AnimatedImage';
import Circle from './Pages/Circle';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Shopping" component={Shopping} options={{headerShown:false}}/>
      <Drawer.Screen name="AnimatedBottomBar" component={AnimatedBottomBar} />
      <Drawer.Screen name="AnimatedText" component={AnimatedText} />
      <Drawer.Screen name="SharedElementPage" component={SharedElementPage} />
      <Drawer.Screen name="Circle" component={Circle} />
    </Drawer.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MyDrawer" component={MyDrawer} /> 
        <Stack.Screen
          name="AnimatedImage"
          component={AnimatedImage}
          sharedElements={route => {
            const {index} = route.params;

            return ['image' + index];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
