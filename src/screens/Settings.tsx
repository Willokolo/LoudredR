import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from '../styles/styleSettings';

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <TouchableOpacity style={styles.item}>
        <Image source={require('../../assets/icon/iconeDePerfil.jpg')} style={styles.icon} />
        <View>
          <Text style={styles.itemTitle}>Perfil</Text>
          <Text style={styles.itemSubtitle}>Usuário – Contas Premium</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Image source={require('../../assets/icon/cadeado.png')} style={styles.icon} />
        <View>
          <Text style={styles.itemTitle}>Segurança e Privacidade</Text>
          <Text style={styles.itemSubtitle}>Histórico de músicas – Seguidores</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Image source={require('../../assets/icon/sino.jpg')} style={styles.icon} />
        <View>
          <Text style={styles.itemTitle}>Notificações</Text>
          <Text style={styles.itemSubtitle}>Push – E-Mail</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Image source={require('../../assets/icon/alto-falante.png')} style={styles.icon} />
        <View>
          <Text style={styles.itemTitle}>Configurações avançadas de audio</Text>
          <Text style={styles.itemSubtitle}>Qualidade de mídia – AudioStudio</Text>
        </View>
      </TouchableOpacity>

    {/*
    <TouchableOpacity style={styles.item}>
        <Image source={require('../assets/icons/share.png')} style={styles.icon} />
        <View>
          <Text style={styles.itemTitle}>Compartilhamento de dispositivos</Text>
          <Text style={styles.itemSubtitle}>Maps – Controle de conceção de contas</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Image source={require('../assets/icons/info.png')} style={styles.icon} />
        <View>
          <Text style={styles.itemTitle}>Sobre</Text>
          <Text style={styles.itemSubtitle}>Visão – Política de Privacidade</Text>
        </View>
      </TouchableOpacity> */
    }
      

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
