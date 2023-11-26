import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonGeral  from '../../components/ButtonGeral';
import InputTexto from '../../components/InputTexto';
import styles from './styles';
import { Navbar } from '../../components/Navbar';

export default function RecuperarSenha() {
  const [email, setEmail] = useState('')

  const [emailError, setEmailError] = useState('')

  const handleEmailChange = (text) => {
    setEmail(text);
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    setEmailError(regex.test(text) ? "" : "E-mail parece ser inválido")
  }

  return (
    <View style={styles.container}>
      <Navbar title={'Recuperar senha'} ></Navbar>
      <InputTexto onChangeText={handleEmailChange} placeholder={'Digite seu email'} title={'E-mail'} size={300} error={emailError} borderRadius={8}/>
  
      <ButtonGeral title={'Recuperar'} color={'#37BD6D'} width={300} disabled={Boolean(emailError)}/>
      
    </View>
  );
}
