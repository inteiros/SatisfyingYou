import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#372775',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        padding: 30
      },

    texto: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 35,
        textAlign: 'center'
    },

    botao: {
        borderRadius: 15,
        width: '60%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textoBotao: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 20,
        textAlign: 'center'
    },

})

export default styles;