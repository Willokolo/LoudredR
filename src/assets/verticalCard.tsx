import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, Switch, ScrollView} from 'react-native';
import styles from '../styles/styleHome';
import { textSize } from '../styles/textSize';

type Props = {
    Playlist: keyof typeof imagens,
    title?: string,
};

const imagens = {
    playlist7: require('../../assets/Playlist/playlist7.jpg'),
      playlist8: require('../../assets/Playlist/playlist8.jpg'),
      playlist9: require('../../assets/Playlist/playlist9.jpg'),
      playlist10: require('../../assets/Playlist/playlist10.jpg'),
      playlist11: require('../../assets/Playlist/playlist11.jpg'),
      playlist12: require('../../assets/Playlist/playlist12.jpg'),
      playlist13: require('../../assets/Playlist/playlist13.jpg'),
      playlist14: require('../../assets/Playlist/playlist14.jpg'),
      playlist15: require('../../assets/Playlist/playlist15.jpg'),
      playlist16: require('../../assets/Playlist/Matue.png'),
  
};


export default function VerticalCards({Playlist, title}: Props) {
    return(
        <View style = {styles.container}>
            <Image source = {imagens[Playlist]} style = {styles.playlistSugeridas}/>
            <Text style = {textSize(12)}>{title}</Text>
        </View>
    )
};