import React from 'react';
import { Text, View,  TouchableOpacity, Image} from 'react-native';
import styles from '../styles/styleHome';

type Props = {
  navigation: any; // ou tipagem correta com TS
};

export default function HeaderHome({navigation}: Props): React.ReactNode {

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

                <TouchableOpacity onPress={() => {navigation.navigate("Settings")}}> 
                  <Image source = {require('../../assets/configIcon.png')} style = {styles.headerIconSmall}/>
                </TouchableOpacity>
                
              </View>
    );
}