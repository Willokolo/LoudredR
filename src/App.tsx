//Thats the main file of the app, recive all the components and render them
import { StatusBar } from 'expo-status-bar';
import { Text, View,  TouchableOpacity, Image} from 'react-native';
import styles from './styles/styleHome';
import home from './screens/home'
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderHome from './assets/headerHome';
//imports of functions and components

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="home">
        <Stack.Screen name="home" component={home}
            options = {{headerShown: true, header: HeaderHome}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
