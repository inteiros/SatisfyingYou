import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonGeral from '../../components/ButtonGeral';
import InputTexto from '../../components/InputTexto';
import { Logo } from '../../components/Logo';
import styles from './styles';

export default function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')

  const goToCriarConta = () => {
    props.navigation.navigate('NovaConta')
  }

  const goToRecuperarSenha = () => {
    props.navigation.navigate('RecuperarSenha')
  }

  const goToPaginaPrincipal = () => {
    props.navigation.navigate('Drawer')
  }

  const handleEmailChange = (text) => {
    setEmail(text);
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    setEmailError(regex.test(text) ? "" : "Email inválido")
  }

  const handlePasswordChange = (text) => {
    setPassword(text); 
  }

  return (
    <View style={styles.container}>
      <Logo/>
      <InputTexto placeholder={'Digite seu email'} title={'E-mail'} size={300} onChangeText={handleEmailChange} error={emailError}/>
      <InputTexto secure={true} placeholder={'Digite sua senha'} title={'Senha'} onChangeText={handlePasswordChange} size={300}/>

      <ButtonGeral title={'Entrar'} color={'#37BD6D'} width={300} disabled={Boolean(emailError) || email == '' || password == ''} onPress={goToPaginaPrincipal}/>
  
      <View style={styles.bottomContainer}>
        <ButtonGeral title={'Criar minha conta'} color={'#419ED7'} width={300} onPress={goToCriarConta}/>
        <ButtonGeral title={'Esqueci minha senha'} color={'#B0CCDE'} width={300} onPress={goToRecuperarSenha}/>
      </View>
      
    </View>
  );
}
