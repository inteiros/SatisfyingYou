import { View, Image, Text } from "react-native";
import styles from "./styles";

export default function Relatorio() {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: "https://cdn-icons-png.flaticon.com/512/3589/3589863.png"}}/>
            
            <View style={styles.aninhado}>
                <View style={styles.excelent}></View>
                <Text style={styles.text}>Excelente</Text>
            </View>

            <View style={styles.aninhado}>
                <View style={styles.good}></View>
                <Text style={styles.text}>Bom</Text>
            </View>

            <View style={styles.aninhado}>
                <View style={styles.regular}></View>
                <Text style={styles.text}>Neutro</Text>
            </View>

            <View style={styles.aninhado}>
                <View style={styles.bad}></View>
                <Text style={styles.text}>Ruim</Text>
            </View>

            <View style={styles.aninhado}>
                <View style={styles.terrible}></View>
                <Text style={styles.text}>Pessimo</Text>
            </View>
        </View>
    )
}