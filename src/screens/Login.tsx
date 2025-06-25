//this page was made for will, some errors in this code is not your responsability
//Thid file is the first screen of the app
//Esta pagina é a primeira tela do app
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, Switch} from 'react-native';
import styles from '../styles/styleLogin';
import { textSize } from '../styles/textSize';

export default function Screen1() {

    const [isLembrar, setIsLembrar] = useState(false); //Cria as constantes para o switch
    const atualizaValor = () => setIsLembrar(statusAtual => !statusAtual); //Atualiza o setIsLembrar para o valor atual do switch 

    return (

        <View style={styles.container}> 

            <View style={styles.containerLogo} >  
                <Image 
                    style = {styles.imagem}
                    source = { require('../../assets/Loudred-Logotipo.jpg')} 
                />
            </View> 

            <View style={styles.containerInput}> 
                <TextInput
                    placeholder = 'Email ou Usuário'
                    style = {styles.input}
                />

                 <TextInput
                    placeholder = 'Senha'
                    style = {styles.input}                
                />

                <View style = {styles.ladoAlado}> 
                    <Text style = {textSize(17)}>Guardar usuario e senha</Text>
                    <Switch
                        trackColor={{ false: "#a7a7a7", true: "#745ce0" }}
                        thumbColor={"#f4f3f4"}
                        value = {isLembrar} 
                        onValueChange={atualizaValor}
                    />
                </View>

                <View style = {styles.containerBotao}> 
                    <TouchableOpacity style = {styles.botao}>
                        <Text style = {styles.textoBotao}>Entrar</Text>
                    </TouchableOpacity>

                    <View style = {styles.ladoAlado}> 
                        <View style= {styles.line}> </View>
                        <Text style = {textSize(22) }> ou </Text>
                        <View style= {styles.line}> </View>
                    </View>

                    <View style = {styles.ladoAlado}> 
                        <Text style = {textSize(17)}>Não tem conta?</Text>
                        <TouchableOpacity>
                            <Text style = {styles.textTouchable}>Inscreva-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
            <View style = {styles.containerRodape}> 
                <TouchableOpacity> 
                    <Text style={styles.esqueceu}>Esqueceu sua senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity> 
                    <Text style={textSize(14)}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};