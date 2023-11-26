import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export const card = ({ title, color, width, style, onPress, disabled, imageSource, text, data }) => {
  const divStyle = {
    backgroundColor: color || 'green',
  };

  const styles = StyleSheet.create({
    div: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center', 
      width: width || 100,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontFamily: 'AveriaLibre-Regular',
    },
    image: {
      width: 80, 
      height: 80, 
      marginBottom: 10, 
    },
    text: {
      color: '#3F92C5',
      fontSize: 25,
      fontFamily: 'AveriaLibre-Regular',
    },
    data: {
      fontSize: 10,
    }
  });

  return (
    <TouchableOpacity
      style={[styles.div, divStyle, style]}
      disabled={disabled}
      onPress={onPress}
    >
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.buttonText}>{title}</Text>
      <Text>{data}</Text>
    </TouchableOpacity>
  );
};

export default card
