//Thats the main file of the app, recive all the components and render them
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import styles from './styles/styleLogin';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//imports of functions and components

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

      <StatusBar style='inverted' hidden={true}/>

      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Cadastro">
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    
    </NavigationContainer>

  );
}
