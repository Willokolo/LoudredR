//Thats the main file of the app, recive all the components and render them
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View,  TouchableOpacity, Image} from 'react-native';
import styles from './styles/styleHome';
import Home from './screens/home';
import Search from './screens/search'
import Biblioteca from './screens/biblioteca'
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import SettingsScreen from './screens/Settings';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderHome from './assets/headerHome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
//imports of functions and components

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigation() {
  return(
    <Tab.Navigator>
      <Tab.Screen 
        name = 'homeTab' component={Home}
          options = {{headerShown: true,
          header: ({navigation}) => <HeaderHome navigation={navigation}/>,
          tabBarIcon: ({color}) => <FontAwesome color = {color} name = 'home' size = {24} />, 
          tabBarLabel: 'Inicio',
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#808080',
          tabBarStyle: {
            backgroundColor: '#050505',
            marginBottom: 10, 
          }
        }}
      />

      <Tab.Screen 
        name = 'searchTab' component={Search}
        options = {{headerShown: false,
          tabBarIcon: ({color}) => <FontAwesome color = {color} name = 'search' size = {24} />, 
          tabBarLabel: 'Pesquisar',
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#808080',
          tabBarStyle: {
            backgroundColor: '#050505',
            marginBottom: 10, 
          }
        }}
      />

      <Tab.Screen 
        name = 'bibliotecaTab' component={Biblioteca}  
        options = {{headerShown: false,
          tabBarIcon: ({color}) => <FontAwesome color = {color} name = 'bookmark' size = {24} />, 
          tabBarLabel: 'Biblioteca',
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#808080',
          tabBarStyle: {
            backgroundColor: '#050505',
            marginBottom: 10, 
          }
        }}
      />

    </Tab.Navigator>
  )
};

export default function App() {
  return (
    <NavigationContainer>

      <StatusBar style='inverted' hidden={true}/>

      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Cadastro">
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Home' component={MainTabNavigation}/>
        <Stack.Screen name="Settings" component={SettingsScreen} 
          options={{
            headerShown: true,
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: '#050505'},
            headerTitle: 'Configurações'
          }}
        />
      </Stack.Navigator>
    
    </NavigationContainer>

  );
}
