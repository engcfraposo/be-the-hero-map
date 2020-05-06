import React, { useState, useEffect } from 'react';
import {Image} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

import api from '../../services/Api'

import styles from './styles'

import logoImg from '../../assets/logo.png'

export default function Maps() {

  
  const [ ongs , setOngs ] = useState([]);
  const [ currentRegion , setCurrentRegion ] = useState(null);


  
  useEffect(()=>{

    async function loadInicialPosition(){

      const { granted } = await requestPermissionsAsync()

      if (granted) {

        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })

      }
    }

    loadInicialPosition();

  }, []);

 

  useEffect(() => {

    async function loadOngs(){
      
      const response = await api.get('ongs')

      const { latitude, longitude } = currentRegion;
     
      setOngs(response.data);
      
      
    }
    
    loadOngs();
  }, [])


  function handleRegionChanged(region){
    setCurrentRegion(region);
  }

  if (!currentRegion){
    return null;
  }

  return (
    <>
      <MapView 
        onRegionChangeComplete={handleRegionChanged} 
        initialRegion={currentRegion} 
        style={styles.map} 
      >

        {ongs.map(ong => (
          <Marker 
            key={ong._id}
            coordinate={{ 
              latitude: ong.location.coordinates[1], 
              longitude: ong.location.coordinates[0]
              }}
            >
          <Image style={styles.avatar} source={logoImg}/>
          <Callout onPress={() => {}} >
                
          </Callout>
        </Marker> 
        ))}

      </MapView>
      
    </>
  );
}

