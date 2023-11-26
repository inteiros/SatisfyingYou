import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function ModalApagar({isOpen, setModalOpen}){
    
    const navigation = useNavigation();
    const goToPaginaPrincipal = () => {
        navigation.navigate('PaginaPrincipal')
      }

    if (isOpen) {
        return (
            <View style={modal.fundo}>
                <View style={modal.popup}>
                    <Text style={modal.texto}>Tem certeza que quer apagar essa pesquisa?</Text>
                    <View style={modal.botao}>
                        <TouchableOpacity style={modal.yes} onPress={goToPaginaPrincipal}>
                            <Text style={modal.textoBotao}>SIM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={modal.no} onPress={setModalOpen}>
                            <Text style={modal.textoBotao}>CANCELAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    return null
    
}

const modal = StyleSheet.create({
    fundo: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0, 0.7)',
        zIndex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems:'center'
    },

    texto: {
        fontSize: 25,
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular'
    },

    popup: {
        width: '80%',
        height: '25%',
        backgroundColor: '#372775',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 10
    },

    botao: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
    },
    
    yes: {
        backgroundColor: '#FF8383',
        width: 115,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },

    no: {
        backgroundColor: '#3F92C5',
        width: 115,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center'
    }, 

    textoBotao: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular'
    }

})