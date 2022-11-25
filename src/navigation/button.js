import React from "react";
import { Text, VStack, Center, NativeBaseProvider, View, Image, Button, Icon } from "native-base";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../navigation/ScreenStack/HomeScreen';

const Tab = createBottomTabNavigator();

function SettingScreen () {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text> OOOOOO </Text>
            </View>
    );
}

export const BottomNavigation = () => {
    return(
        <Tab.Navigator initialRouteName="HOME">´´
            <Tab.Screen name="HOME" component={SiniestroScreen}options={{TabBarIcon: ({color}) => (
                <TabBarIcon name="user" color={color}/>
            ), headerShow: false }}/>
            <Tab.Screen name="GALERIA" component={VideosScreen}options={{TabBarIcon: ({color}) => (
                <TabBarIcon name="user" color={color}/>
            ), headerShow: false }}/>

        </Tab.Navigator>
    )
}

function TabBarIcon({name,color}){
    return (
        <Icon size={30} style={{marginBottom: -3}} name={name} color={color}/>
    );
}