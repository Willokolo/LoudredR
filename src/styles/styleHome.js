import {StyleSheet} from 'react-native'; //import the method to create styles

const mainRoxo = '#745ce0'; //#745ce0 é o tom de roxo principal 

export default StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerMain: {
        flex: 1, // This makes the container take up the full screen
        backgroundColor: '#050505', //Background collor
    },

    botao: {

        width: 60  , 
        height: 30,
        backgroundColor: mainRoxo,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },

    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: 80,
        padding: 10,
        paddingLeft: 20,
        backgroundColor: '#050506'
    },

     standartText: { //texto padrao
        color: '#050505',
        fontSize: 12,
    },

    ladoAlado: { //estilo da view do switch (Mantem os componentes dentro dela um ao lado do outro)
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },

    playlistCard: {
        flexDirection: 'row',
        width: 165,
        height: 70,
        backgroundColor: '#808080',
        borderRadius: 20,
        marginBottom: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },

    image: {
        width: 70,
        height: 70,
        marginRight: 5,
        borderRadius: 20,
        resizeMode: 'contain',
    },

    playlistSugeridas:{
        width: 150,
        height: 150,
        borderRadius: 10,
        margin: 10,
        resizeMode: 'contain',
    },

    txtSeuArtista: {
        fontSize: 18,
        color: '#fff',
    },
    
    containerTitle: {
        width: '100%',
        height: 40,
        paddingLeft: 25,
        alignItems:'flex-start',
        justifyContent: 'center',
    },
});