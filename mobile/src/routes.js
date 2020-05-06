
import 'react-native-gesture-handler';
import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents'
import Detail from './pages/Detail'
import Logon from './pages/Logon'
import Profile from './pages/Profile'
import Maps from './pages/Maps'

export default function Routes() {
    return (
      
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown:false }}>

                <AppStack.Screen name="Logon" component={Logon} />
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
                <AppStack.Screen name="Profile" component={Profile} />
                <AppStack.Screen name="Maps" component={Maps} />
                
            </AppStack.Navigator>
        </NavigationContainer>

       

    );
}