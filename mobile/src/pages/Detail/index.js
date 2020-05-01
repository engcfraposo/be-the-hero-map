import React from 'react'
import { Linking } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute} from '@react-navigation/native'
import * as Mailcomposer from 'expo-mail-composer'


import {

  Container, 
  Header, 
  Logo, 
  ButtonBack, 
  Incidents,
  IncidentsProperty,
  IncidentsValue,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  Action,
  ActionText,

} from './styles'

import logoImg from '../../assets/logo.png'

export default function Detail() {

  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl
    .NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
    .format(incident.value)}`;

    function navigateToBack(){
      navigation.navigate('Incidents');
    }

    function sendEmail(){
      Mailcomposer.composeAsync({
        subject: `Herói do caso: ${incident.title}`,
        recipients: [incident.email],
        body: message
      })
    }

    function sendWhatsapp(){
      Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
    }

    return (
      <Container>
        <Header>
          <Logo source={logoImg}/>
          <ButtonBack onPress={()=>navigateToBack()}>
            <Feather name="arrow-up" size={28} color="#e02041"/>
          </ButtonBack>
        </Header>

        <Incidents>
            <IncidentsProperty style={{marginTop: 0}}>ONG:</IncidentsProperty>
            <IncidentsValue>{incident.name} de {incident.city}/{incident.uf} </IncidentsValue>

            <IncidentsProperty>CASO:</IncidentsProperty>
            <IncidentsValue>{incident.title}</IncidentsValue>

            <IncidentsProperty>VALOR:</IncidentsProperty>
            <IncidentsValue>{Intl
              .NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
              .format(incident.value)}
            </IncidentsValue>
        </Incidents>

        <ContactBox>
          <HeroTitle>Salve o dia!</HeroTitle>
          <HeroTitle>Seja o heroi desse caso.</HeroTitle>
          <HeroDescription>Entre em contato:</HeroDescription>
        
          <Actions>
            <Action onPress={sendWhatsapp}>
                <ActionText>Whatsapp</ActionText>
            </Action>

            <Action onPress={sendEmail}>
                <ActionText>E-mail</ActionText>
            </Action>
          </Actions>
       </ContactBox>

      </Container>

    );
  }