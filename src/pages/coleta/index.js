import { Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./styles";

export default function Coleta(props) {

    const goToAgradecimento = () => {
        props.navigation.navigate('Agradecimento')
      }

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>O que você achou do Carnaval 2023?</Text>

            <TouchableOpacity style={styles.botao} onPress={goToAgradecimento}>
                <Icon name="sentiment-very-satisfied" size={70} color="#25BC22" /> 
                <Text style={styles.textoBotao}>Excelente</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={goToAgradecimento}>
                <Icon name="sentiment-satisfied-alt" size={70} color="#37BD6D" /> 
                <Text style={styles.textoBotao}>Bom</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={goToAgradecimento}>
                <Icon name="sentiment-neutral" size={70} color="#FFC632" />
                <Text style={styles.textoBotao}>Neutro</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={goToAgradecimento}>
                <Icon name="sentiment-dissatisfied" size={70} color="#FF360A" />
                <Text style={styles.textoBotao}>Ruim</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={goToAgradecimento}>
                <Icon name="sentiment-very-dissatisfied" size={70} color="#D71616" />
                <Text style={styles.textoBotao}>Péssimo</Text>
            </TouchableOpacity>

        </View>
    )
}