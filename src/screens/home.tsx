import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, Switch, ScrollView} from 'react-native';
import styles from '../styles/styleHome';
import { textSize } from '../styles/textSize';
import CardsPlaylist from '../assets/cardsPlaylist';

export default function home() {
    return (
        <ScrollView style = {styles.containerMain}>
            <View>
               <View style = {styles.container}>
                   <CardsPlaylist image1='MyPlay' image2='LikedSongs'/>  
               </View>
      
               <View style = {styles.container}>
                   <CardsPlaylist image1='MyPlay' image2='LikedSongs'/>  
               </View>
      
               <View style = {styles.container}>
                   <CardsPlaylist image1='MyPlay' image2='LikedSongs'/>  
               </View>
            </View>
        </ScrollView>
    )
};