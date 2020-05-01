import styled from 'styled-components/native'


export const Container = styled.KeyboardAvoidingView `

    flex: 1;
    padding: 0 24px;
    padding-top: 40px;
    align-items: center;
    justify-content: center;

`


export const Logo = styled.Image`

`

export const LogonTextInput = styled.TextInput`
    
    height: 46px;
    align-self: stretch;
    background-color: #fff;
    border-width: 1px;
    border-color: #ddd;
    border-radius: 4px;
    margin-top: 60px;
    padding: 0 15px;
    width: 70%;
    justify-content: center;
    align-self: center;
       
`

export const PasswordTextInput = styled.TextInput`

    height: 46px;
    align-self: stretch;
    background-color: #fff;
    border-width: 1px;
    border-color: #ddd;
    border-radius: 4px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0 15px;
    width: 70%;
    justify-content: center;
    align-self: center;
       
`


export const Actions = styled.View`        
    
    margin-top: 16px;
    flex-direction: column;
        
`

export const ActionLogin = styled.TouchableOpacity`        
    
    background: #e02041;
    border-radius: 8px;
    height: 50px;
    width: 70%;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
        
`

export const Action = styled.TouchableOpacity`        
    
    background: #e02041;
    border-radius: 8px;
    height: 50px;
    width: 48%;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
        
`

export const ActionText = styled.Text`
    
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    
`

