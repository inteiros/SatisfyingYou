import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/login/index';
import Agradecimento from './src/pages/agradecimento/index';
import AcoesPesquisa from './src/pages/acoespesquisa/index';
import ModificarPesquisa from './src/pages/modificarpesquisa/index';
import NovaConta from './src/pages/novaconta/index';
import NovaPesquisa from './src/pages/novapesquisa/index';
import Coleta from './src/pages/coleta/index';
import PaginaPrincipal from './src/pages/home/index';
import RecuperarSenha from './src/pages/recuperarsenha/index';
import Relatorio from './src/pages/relatorio';
import Drawer from './src/pages/drawer';

const Stack = createStackNavigator()

const App =  () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="NovaConta" component={NovaConta} />
                <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
                <Stack.Screen name="PaginaPrincipal" component={PaginaPrincipal} />
                <Stack.Screen name="NovaPesquisa" component={NovaPesquisa} />
                <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa} />
                <Stack.Screen name="Agradecimento" component={Agradecimento} />
                <Stack.Screen name="AcoesPesquisa" component={AcoesPesquisa} />
                <Stack.Screen name="Coleta" component={Coleta} />
                <Stack.Screen name="Relatorio" component={Relatorio} />
                <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;