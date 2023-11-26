import { Image, StyleSheet, Text, View } from 'react-native';
const logo = require("../assets/img/logo.png")

export const Logo = ({ size }) => {
      
    const styles = StyleSheet.create({
        logo: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },

        logoTitle: {
            color: 'white',
            fontSize: size || 33,
            fontFamily: 'AveriaLibre-Regular'
        },
    });

    return (
        <View style={styles.logo}>
            <Text style={styles.logoTitle}>Satisfying.you <Image source={logo} style={{width: size || 33, height: size || 33}} /></Text>
        </View>
    );
};


