import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';


export const Navbar = ({ title, top }) => {
    const { goBack } = useNavigation();

    const navigateBack = useCallback(() => {
        goBack();
    }, [goBack]);

    const styles = StyleSheet.create({
        nav: {
            position: 'absolute',
            backgroundColor: '#2B1D62',
            width: '100%',
            height: 90,
            padding: 24,
            top: 0,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 50
          },
      
          texto2: {
            marginLeft: 20,
            color: '#fff',
            fontSize: 32
          },
    });

    return (
        <View style={styles.nav} >
            <TouchableOpacity onPress={navigateBack}><Icon name="arrow-back" size={48} color="#573FBA" /></TouchableOpacity>
            <Text style={styles.texto2}>{title}</Text>
        </View>
    );
};


