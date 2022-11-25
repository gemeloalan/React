import * as React from 'react';
import { Text, View,Image, center } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PerfilScreen from './src/navigation/ScreenStack/PerfilScreen';
import SiniestroScreen from './src/navigation/ScreenStack/SiniestroScreen';
import HomeScreen from './src/navigation/ScreenStack/HomeScreen';
import VideosScreen from './src/navigation/ScreenStack/VideosScreen';
import { createStackNavigator } from '@react-navigation/stack';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Imbox"
        tabBarOptions={{
          activeBackgroundColor: "#E187F9",
          inactiveBackgroundColor: "#C2D5FD"
        }}
        >
        <Tab.Screen name="SINIESTRO" component={SiniestroScreen} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../Miprimeraap/assets/icons/ropa.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </View>
          ),
        }} />
        
        <Tab.Screen  name="HOME" component={HomeScreen} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../Miprimeraap/assets/icons/home.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </View>
          ),headerShown: false
        }}  />
        
        <Tab.Screen name="GALERIA" component={VideosScreen} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../Miprimeraap/assets/icons/galeria.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </View>
          ),
        }}  />

        





        
      </Tab.Navigator>
    </NavigationContainer>
  );
}