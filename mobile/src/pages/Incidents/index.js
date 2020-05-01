import React, {useState, useEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'


import {
  
  Container,
  Header,
  Logo,
  Title,
  Description,
  IncidentFlatList,
  IncidentsView,
  IncidentsProperty,
  IncidentsValue,
  DetailButton,
  DetailButtonText,
  
} from './styles'


import logoImg from '../../assets/logo.png'
import api from '../../services/Api'

export default function Incidents() {

    const [incidents, setIncidents] = useState([]);
    
    const navigation = useNavigation();

    
    function navigateToDetail(incident){

      navigation.navigate('Detail', { incident });
    
    }

    
    async function loadIncidents(){
      
      const response = await api.get('incidents')
        
      return setIncidents(response.data);  
        
    }

    useEffect(() => {
      loadIncidents()
    }, [])
      
    return ( 
                   
      <Container>
        <Header>
          <Logo source={logoImg}/> 
        </Header>
        <Title>Bem-vindo!</Title>   
        <Description>Escolha um dos casos e salve o dia.</Description>   
          
        <IncidentFlatList
          keyExtractor={ incident => String(incident._id)}
          data={incidents}
          showsVerticalScrollIndicator={false}
          onEndReached={loadIncidents}
          onEndReachedThreshold={0.2}
          renderItem={({ item: incident }) => ( 
            <IncidentsView>
              <IncidentsProperty>ONG:</IncidentsProperty>
              <IncidentsValue>{incident.name}</IncidentsValue>

              <IncidentsProperty>CASO:</IncidentsProperty>
              <IncidentsValue>{incident.title}</IncidentsValue>

              <IncidentsProperty>VALOR:</IncidentsProperty>
              <IncidentsValue>
                {Intl
                .NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
                .format(incident.value)}
              </IncidentsValue>

              <DetailButton  
                onPress={() => navigateToDetail(incident)} >

                <DetailButtonText>Ver mais detalhes</DetailButtonText>
                <Feather name="arrow-down" size={16} color="#e02041"/>

              </DetailButton>
            </IncidentsView>

          )}/>
          
          
         
      </Container>
      
        
    );
  }