import React from "react";
import { Text, VStack, Center, NativeBaseProvider, View, Image, Button,  ImageBackground } from "native-base";
import { ScreenStack } from "react-native-screens";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationAction } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';


export const HomeScreen = ({}) => {
  const navigation = useNavigation();
  return <VStack space={3} alignItems="center">
      <Text fontSize="5xl">
        RENTA DE AUTOS
      </Text>
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button size="sm" variant="subtle" onPress={() => navigation.navigate('SINIESTRO')}>
            <Center>
              <Image
                        source={{
              uri: 'https://media.gotrendier.mx/media/products/3/4/1/8/5/9/7/n_795814320210311140349_0.jpg',
                        }}
                        alt="Alternate Text" size="xl"/>
            </Center>
              <Text fontSize="4xl" >
              Rentar un Auto
              </Text> </Button>
              
            </View>
    </VStack>;
};



    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={2} px="2">
                <HomeScreen />
            </Center>
          </NativeBaseProvider>
        );
    };