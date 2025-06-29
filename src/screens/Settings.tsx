import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/styleSettings';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>

      <TouchableOpacity style={styles.item}>
        <FontAwesome name='user-circle' color={'#fff'} size={40} style={styles.icon}/>

        <View>
          <Text style={styles.itemTitle}>Perfil</Text>
          <Text style={styles.itemSubtitle}>Usuário – Contas Premium</Text>
        </View>

      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <FontAwesome name='shield' color={'#fff'} size={40} style={styles.icon}/>

        <View>
          <Text style={styles.itemTitle}>Segurança e Privacidade</Text>
          <Text style={styles.itemSubtitle}>Histórico de músicas – Seguidores</Text>
        </View>

      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <FontAwesome name='bell' color={'#fff'} size={40} style={styles.icon}/>

        <View>
          <Text style={styles.itemTitle}>Notificações</Text>
          <Text style={styles.itemSubtitle}>Push – E-Mail</Text>
        </View>

      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <FontAwesome name='volume-up' color={'#fff'} size={40} style={styles.icon}/>
        
        <View>
          <Text style={styles.itemTitle}>Configurações avançadas de audio</Text>
          <Text style={styles.itemSubtitle}>Qualidade de mídia – AudioStudio</Text>
        </View>

      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>

        <FontAwesome name='share-alt' color={'#fff'} size={40} style={styles.icon}/>

        <View>
          <Text style={styles.itemTitle}>Compartilhamento de dispositivos</Text>
          <Text style={styles.itemSubtitle}>Maps – Controle de conceção de contas</Text>
        </View>

      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>

        <FontAwesome name='info-circle' color={'#fff'} size={40} style={styles.icon}/>

        <View>
          <Text style={styles.itemTitle}>Sobre</Text>
          <Text style={styles.itemSubtitle}>Visão – Política de Privacidade</Text>
        </View>

      </TouchableOpacity>
      

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
