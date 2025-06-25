//Thats the main file of the app, recive all the components and render them
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles/styleLogin';
import Screen1 from './screens/Login';
//inports of functions and components

export default function App() {
  return (
    <View style={styles.containerMain}>  
    <StatusBar style = 'light' />  

    <Screen1/> 
    
    
    </View>   
  )
}
