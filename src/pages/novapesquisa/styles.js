import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    forms: {
      position: 'relative',
      top: 180,
      paddingTop: 30,
      
    },
    busca: {
      paddingLeft: 100,
    },
    container: {
      backgroundColor: '#372775',
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'flex-start',
      gap: 20, 
    },
    botao: {
      position: 'absolute',
      top: '90%'
    },
    content1: {
      color:'black'
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      marginTop: 1,
      marginBottom: 10,
    },
  });

export default styles;