//this page was made for will, some errors in this code is not your responsability
//Thid file is the first screen of the app
//Esta pagina é a primeira tela do app
import React, {useState} from 'react';
import {View, SafeAreaView, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import styles, { mainPlaceholder } from '../styles/styleLogin';
import { textSize } from '../styles/textSize';

type Props = {
    navigation: any
}

export default function Cadastro({navigation}: Props) {

    const [isLembrar, setIsLembrar] = useState(false); //Cria as constantes para o switch
    const atualizaValor = () => setIsLembrar(statusAtual => !statusAtual); //Atualiza o setIsLembrar para o valor atual do switch 

    const irParaLogin = () => {
        navigation.replace('Login')
    }

    const irParaHome = () => {
        navigation.replace('Home')
    }

    return (

        <View style={styles.containerMain}>

            <View style={styles.containerLogo} >  
                <Image 
                    style = {styles.imagem}
                    source = { require('../../assets/Loudred-Logotipo.jpg')} 
                />
            </View> 

            <View style={styles.containerInput}> 
                <TextInput
                    placeholder = 'Usuário'
                    placeholderTextColor={mainPlaceholder}
                    style = {styles.input}
                />

                <TextInput
                    placeholder = 'Email'
                    placeholderTextColor={mainPlaceholder}
                    style = {styles.input}
                />
                
                <TextInput
                    placeholder = 'Senha'
                    placeholderTextColor={mainPlaceholder}
                    style = {styles.input}
                />

                 <TextInput
                    placeholder = 'Confirmar Senha'
                    placeholderTextColor={mainPlaceholder}
                    style = {styles.input}                
                />

                <View style = {styles.containerBotao}> 

                    <TouchableOpacity style = {styles.botao} onPress={irParaHome}>
                        <Text style = {styles.textoBotao}>Cadastrar</Text>
                    </TouchableOpacity>

                    <View style = {styles.ladoAlado}> 
                        <View style= {styles.line}> </View>
                        <Text style = {textSize(22) }> ou </Text>
                        <View style= {styles.line}> </View>
                    </View>

                    <View style = {styles.ladoAlado}> 
                        
                        <Text style = {textSize(17)}>Já tem uma conta?</Text>

                        <TouchableOpacity onPress={irParaLogin}>
                            <Text style = {styles.textTouchable}>Faça Login</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </View>
    )
};