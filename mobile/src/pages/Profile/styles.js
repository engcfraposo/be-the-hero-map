import {StyleSheet} from 'react-native'
import styled from 'styled-components/native'


export default StyleSheet.create({

    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText:{
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold',
    },



});

export const Container = styled.SafeAreaView`

    flex: 1;
    padding: 0 24px;
    padding-top: 40px;

`

export const Header = styled.View`

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`

export const Logo = styled.Image`
        
`

export const Title = styled.Text`
    
    font-size: 30px;
    margin-bottom: 16px;
    margin-top: 48px;
    color: #13131a;
    font-weight: bold;

`

export const Description = styled.Text`
    
    font-size: 16px;
    line-height: 24px;
    color: #737380;
    margin-bottom: 16px;

`

export const IncidentFlatList = styled.FlatList`
    
    

`
export const IncidentsView = styled.View`        
    
    padding: 24px;
    border-radius: 8px;
    background: #fff;
    margin-bottom: 16px;
    margin-top: 18px;
        
`

export const IncidentsProperty = styled.Text`        
    
    font-size: 14px;
    color: #41414d;
    font-weight: bold;
        
`

export const IncidentsValue = styled.Text`        
    
    margin-top: 8px;
    font-size: 15px;
    margin-bottom: 24px;
    color: #737380;
        
`

export const DetailButton = styled.TouchableOpacity`        
        
    flex-direction: row;
    justify-content: space-between;
    align-items: center;    
        
`

export const DetailButtonText = styled.Text`        
        
    color: #e02041;
    font-size: 15px;
    font-weight: bold;   
        
`