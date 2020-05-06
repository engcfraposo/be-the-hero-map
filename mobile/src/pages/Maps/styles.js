import styled from 'styled-components/native'
import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({

    map: {
      flex: 1,
    },
  
    avatar: {
      width: 54,
      height: 54,
      borderRadius: 4,
      borderWidth: 4,
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
  
    callout: {
      width: 250,
    },
  
    devName:{
      fontWeight: 'bold',
      fontSize: 16,
    },
  
    devBio:{
      color: '#666',
      marginTop: 5,
    },
  
    devTechs:{
      marginTop: 5,
    },
  
    searchForm:{
      position: 'absolute',
      top: 20,
      left: 20,
      right: 20,
      zIndex: 5,
      flexDirection: 'row',
    },
  
    searchInput:{
      flex: 1,
      height: 50,
      backgroundColor: '#fff',
      color: '#333',
      borderRadius: 25,
      paddingHorizontal: 20,
      fontSize: 16,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset:{
        width: 4,
        height: 4,
      },
      elevation: 5,
    },
  
    loadButton:{
      width: 50,
      height: 50,
      backgroundColor: '#8E4Dff',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 15,
      shadowOffset:{
        width: 4,
        height: 4,
      },
      elevation: 5,
    },
    
  
  })