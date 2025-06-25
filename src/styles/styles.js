//This file is utilized to style all components in the Loudred app.
//Esta pasta é utilizada para estilizar todos os componentes do Loudred app.
import {StyleSheet} from 'react-native'; //import the method to create styles

const mainRoxo = '#745ce0'; //#745ce0 é o tom de roxo principal 

export default StyleSheet.create({
// This is the function that creates the styles for the components
    containerMain: {
        flex: 1, // This makes the container take up the full screen
        backgroundColor: '#050505', //Background collor
    },

    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
    },


    containerLogo: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'flex-star', // This centers the logo in the container
    },

    imagem: { 
        height: 300,
        width: 300,
        resizeMode: 'contain', // This makes the logo fit in the container without stretching
       
    },

    containerInput: {
        flex: 2,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'flex-star', 
    },

    input: {
        width: 374,
        height: 49,
        backgroundColor: '#7e7e7e',
        borderRadius: 3,
        padding: 10, // This adds padding inside the input field
        marginBottom: 10,

    },

    ladoAlado: { //estilo da view do switch (Mantem os componentes dentro dela um ao lado do outro)
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'spacre-between',
        
    },

    standartText: { //texto padrao
        color: '#fff',
        fontSize: 14,
        marginRight: 150,

    },

    containerBotao: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-sart',
    },

    botao: {
        width: 374, 
        height: 75,
        backgroundColor: mainRoxo,
        borderRadius: 100,
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textoBotao: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        paddding: 15, 

    },

    line: {
        width: 160,
        height: 1,
        backgroundColor: 'white',
    },

    textTouchable: {
        color: mainRoxo,
        fontSize: 17,
        backgroundcolor: '#fff',
    },

    containerRodape: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 35,
    }, 

    esqueceu: {
        fontSize: 14,
        color: '#fff',
        marginRight: 150,

    },
});
