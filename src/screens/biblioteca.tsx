import { Text, View,  TouchableOpacity, Image} from 'react-native';
import styles from '../styles/styleHome';
import { textSize } from '../styles/textSize';

export default function Biblioteca() {
    return(
        <View style = {styles.containerMain}> 
            <View style = {styles.container}> 
                <Text style = {textSize(15)}> Qualquer coisa nessa bomba só para dizer que tem</Text>
            </View>
        </View>
    )

};