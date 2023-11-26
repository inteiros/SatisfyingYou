import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Agradecimento() {
  const navigation = useNavigation();
  setTimeout(() => { navigation.navigate('PaginaPrincipal') }, 3000);

  return (
    <View style={styles.container}>
        <Text style={styles.agradecimento}>Obrigado por participar da pesquisa!</Text>
        <Text style={styles.agradecimento}>Aguardamos você no proximo ano!</Text>
    </View>
  );
}
