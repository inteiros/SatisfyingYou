import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
      backgroundColor: '#372775',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20
    },
  
    input: {
      borderWidth: 1,
      borderRadius: 20,
      padding: '2%',
      width: 300,
      color: 'white',
      borderColor: 'white'
    },
  
    bottomContainer:{
      gap: 10,
      marginTop: 50
    }
  });

export default styles;