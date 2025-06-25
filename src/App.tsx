//Thats the main file of the app, recive all the components and render them
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles/styleLogin';
import Login from './screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//imports of functions and components

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
