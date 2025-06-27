import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, Switch, ScrollView} from 'react-native';
import styles from '../styles/styleHome';
import { textSize } from '../styles/textSize';

type Props = {
    title1?: string;
    image1: keyof typeof imagens;
    title2?: string;
    image2: keyof typeof imagens;
};

const imagens = {
  playlist0: require('../../assets/Playlist/playlist0.jpg'),
  playlist1: require('../../assets/Playlist/playlist1.jpg'),
  playlist2: require('../../assets/Playlist/playlist2.jpg'),
  playlist3: require('../../assets/Playlist/playlist3.jpg'),
  playlist4: require('../../assets/Playlist/playlist4.jpg'),
  playlist5: require('../../assets/Playlist/playlist5.jpg'),
  playlist6: require('../../assets/Playlist/playlist6.jpg'),
  
  
};

export default function CardsPlaylist({title1, image1, title2, image2}: Props) {
    return(
        
            <View style = {styles.ladoAlado}>
                <View style = {styles.playlistCard}> 
                    <Image source = {imagens[image1]} style = {styles.image}/>
                    <Text style = {textSize(15)}>{title1}</Text>
                </View>
        
                <View style = {styles.playlistCard}> 
                    <Image source = {imagens[image2]} style = {styles.image}/>
                    <Text style = {textSize(15)}>{title2}</Text>
                </View>
            </View>
    )
};