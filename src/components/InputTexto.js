import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const InputTexto = ({ title, placeholder, size, secure, error, onChangeText, borderRadius, height}) => {
    const styles = StyleSheet.create({
        title: {
            color: 'white',
            fontFamily: 'AveriaLibre-Regular'
        },
        input: {
            height: height | 40,
            borderColor: 'white',
            borderWidth: 1,
            paddingHorizontal: 10,
            marginTop: 5,
            color: 'black',
            borderRadius: borderRadius || 1,
            width: size,
            backgroundColor: 'white',
            fontFamily: 'AveriaLibre-Regular'
        },
        error:{
            color: '#fd7979',
            fontFamily: 'AveriaLibre-Regular',
            marginBottom: 15,
        },

    });


    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <TextInput onChangeText={onChangeText} secureTextEntry={secure} style={styles.input} placeholder={placeholder} />
            <Text style={styles.error}>{error}</Text>
        </View>
    );
};


export default InputTexto;