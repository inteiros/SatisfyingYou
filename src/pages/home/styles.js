import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#372775',
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'flex-start',
      gap: 20, 
    },
    squaresContainer: {
      flexDirection: 'row',
      paddingTop: 140
    },
    div: {
      backgroundColor: 'white',
      width: 200,
      height: 200,
      marginLeft: 10,
    },
    botao: {
      marginBottom: 20
    },
    content1: {
      color:'black'
    }
  
  });

  export default styles;