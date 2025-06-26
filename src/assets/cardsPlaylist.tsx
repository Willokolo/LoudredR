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
    MyPlay: require('../../assets/jazz.png'),
    LikedSongs: require('../../assets/jazz.png'),
    Ryanna: require('../../assets/jazz.png'),
    Matue: require('../../assets/jazz.png'),
    Pagode: require('../../assets/jazz.png'),
    podPah: require('../../assets/jazz.png'),
  
};

export default function CardsPlaylist({title1, image1, title2, image2}: Props) {
    return(
        <View style = {styles.ladoAlado}>
            <View style = {styles.playlistCard}> 
                <Image source = {imagens[image1]} style = {styles.image}/>
                <Text style = {textSize(20)}>{title1}</Text>
            </View>

            <View style = {styles.playlistCard}> 
                <Image source = {imagens[image2]} style = {styles.image}/>
                <Text style = {textSize(20)}>{title2}</Text>
            </View>
        </View>
    )
};