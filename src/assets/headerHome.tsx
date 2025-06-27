import { Text, View,  TouchableOpacity, Image} from 'react-native';
import styles from '../styles/styleHome';


export default function HeaderHome() {

    return (
              <View style = {styles.headerView}> 
                <TouchableOpacity> 
                  <Image source = {require('../../assets/usericon.png')} style = {styles.headerIcon}/>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.botao}> 
                  <Text>Tudo</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.botao}> 
                  <Text style = {styles.standartText}>Música</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.botao}> 
                  <Text style = {styles.standartText}>Podcast</Text>
                </TouchableOpacity>

                <TouchableOpacity> 
                  <Image source = {require('../../assets/configIcon.png')} style = {styles.headerIcon}/>
                </TouchableOpacity>
                
              </View>
    );
}