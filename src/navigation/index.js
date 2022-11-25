import * as React from'react'
import { View, Text } from 'native-base';
import { BottomNavigation } from './button';

import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from'@react-navigation/native-stack';

import HomeScreen from './ScreenStack/HomeScreen';
import VideosScreen from './ScreenStack/HomeScreen';
import SiniestroScreen from './ScreenStack/HomeScreen';
const Stack = createNativeStackNavigator();

export const Navigation = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName='HOME'>
    <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="GALERIA" component={VideosScreen} />
      <Stack.Screen name="SINIESTRO" component={SiniestroScreen} />
</Stack.Navigator> 
</NavigationContainer>
);
}