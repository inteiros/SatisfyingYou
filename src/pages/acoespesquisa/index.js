import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Navbar } from '../../components/Navbar';
import styles from './styles';

export default function AcoesPesquisa(props) {

  const goToModificarPesquisa = () => {
    props.navigation.navigate('ModificarPesquisa')
  }
  const goToColeta = () => {
    props.navigation.navigate('Coleta')
  }
  const goToRelatorio = () => {
    props.navigation.navigate('Relatorio')
  }

  return (
    <View style={styles.container}>
        <Navbar title={'Carnaval'} top={-110}></Navbar>
        <TouchableOpacity style={styles.button} onPress={goToModificarPesquisa}>
            <Icon name="edit-document" size={48} color="#F9F9F9" /> 
            <Text style={styles.texto}>Modificar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToColeta}>
            <Icon name="devices" size={48} color="#F9F9F9" /> 
            <Text style={styles.texto}>Coletar dados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToRelatorio}>
            <Icon name="donut-large" size={48} color="#F9F9F9" /> 
            <Text style={styles.texto}>Relatório</Text>
        </TouchableOpacity>
    </View>
  );
}
