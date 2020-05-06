import React, {useState} from 'react'
import {useNavigation} from '@react-navigation/native';
import {Platform} from 'react-native'


import {

  Container,  
  Logo, 
  LogonTextInput,
  PasswordTextInput,
  Action,
  ActionLogin,
  ActionText,

} from './styles'

import api from '../../services/Api'
import logoImg from '../../assets/logo.png'

export default function Logon() {

  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation({email, password});
  
  
    async function handleLogin() {
      
  
      try {
  
        const response = await api.post('sessions', {email, password});
        
          
        navigation.navigate('Profile', response.data)
  
      } catch (err){
        alert('Falha no login, tente novamente.')
      }
    }

    async function handleIncidents() {
      
          
        navigation.navigate('Incidents')
  
    }

    async function handleMaps() {
      
          
      navigation.navigate('Maps')

  }


    return (
      <Container
        behavior="padding"
        enabled={Platform.OS == 'ios'}
      >
        
        <Logo source={logoImg}/> 

        <LogonTextInput
           autoCapitalize ="none"
           autoCorrect = {false}
           placeholder="Digite seu E-mail"
           placeholderTextColor="#999"
           value={email}
           onChangeText={setEmail}
        />


        <PasswordTextInput
           autoCapitalize ="none"
           autoCorrect = {false} 
           secureTextEntry = {true} 
           placeholder="Digite sua senha"
           placeholderTextColor="#999"
           value={password}
           onChangeText={setPassword}
        
        />

        <ActionLogin onPress={handleLogin}>
          <ActionText>Login</ActionText>
        </ActionLogin>

        <Action onPress={handleIncidents}>
          <ActionText>Lista de Casos</ActionText>
        </Action>

        <Action>
          <ActionText onPress={handleMaps}>Mapa de Ong's</ActionText>
        </Action>

      </Container>

    );
  }