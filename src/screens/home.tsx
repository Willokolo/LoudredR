import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, Switch, ScrollView} from 'react-native';
import styles from '../styles/styleHome';
import { textSize } from '../styles/textSize';
import CardsPlaylist from '../assets/cardsPlaylist';
import VerticalCards from '../assets/verticalCard'

export default function Home() {
    return (
        <ScrollView style = {styles.containerMain} horizontal= {false}>
            <View>
               <View style = {styles.container}>
                   <CardsPlaylist image1='playlist0' title1='Rihana' image2='playlist5' title2 = 'Kayblack'/>  
               </View>
      
               <View style = {styles.container}> 
                   <CardsPlaylist image1='playlist1'title1 = 'PodPah' image2='playlist4' title2='Hylander'/>  
               </View>
      
               <View style = {styles.container}>
                   <CardsPlaylist image1='playlist2' title1= {'Músicas\nCurtidas'} image2='playlist3' title2={'Drake x\nKendrick'}/>  
               </View>
            </View>

            <View style={styles.containerTitle}>
                <Text style = {styles.txtSeuArtista}>Seus artistas</Text>
            </View>

            <ScrollView horizontal = {true}> 
                <View style = {styles.ladoAlado}>
                    <VerticalCards Playlist='playlist7' title='As mais ouvidas de Matue'/>
                    <VerticalCards Playlist='playlist8' title='As mais ouvidas de Kayblack'/>
                    <VerticalCards Playlist='playlist9' title='As mais ouvidas de BK'/>
                    <VerticalCards Playlist='playlist10' title='As mais ouvidas de Matue'/>
                </View>
            </ScrollView>

            <View style={styles.containerTitle}>
                <Text style = {styles.txtSeuArtista}>Lançamentos</Text>
            </View>

            <ScrollView horizontal = {true}> 
                <View style = {styles.ladoAlado}>
                    <VerticalCards Playlist='playlist11' title='As mais ouvidas de Matue'/>
                    <VerticalCards Playlist='playlist12' title='As mais ouvidas de Matue'/>
                    <VerticalCards Playlist='playlist13' title='As mais ouvidas de Matue'/>
                    <VerticalCards Playlist='playlist14' title='As mais ouvidas de Matue'/>
                </View>
            </ScrollView>

            <View style={styles.containerTitle}>
                <Text style = {styles.txtSeuArtista}>Recomendado para você</Text>
            </View>

            <ScrollView horizontal = {true}> 
                <View style = {styles.ladoAlado}>
                    <VerticalCards Playlist='playlist15' title='As mais ouvidas de Matue'/>
                    <VerticalCards Playlist='playlist16' title='As mais ouvidas de Matue'/>
                    <VerticalCards Playlist='playlist16' title='As mais ouvidas de Matue'/>
                    <VerticalCards Playlist='playlist16' title='As mais ouvidas de Matue'/>
                </View>
            </ScrollView>

        </ScrollView>
    )
};