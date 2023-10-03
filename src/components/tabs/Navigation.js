import React from 'react'
import Home from '../../screens/Home'
import Login from '../../screens/Login'
import { useAuth } from '../../context/AuthContext'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button } from 'react-native'

const Stack = createNativeStackNavigator()

export default function Navigation() {
    const {authState, onLogout} = useAuth()
    
  return (
     <Stack.Navigator>
        {authState?.authenticated ? 
    (
     <Stack.Screen name="Home" component={Home} options={{
        headerRight: () => <Button title='Logout' onPress={onLogout}/>
     }}/>
    )
     : 
    (
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
    )
    }
        
    </Stack.Navigator>
  ) 
}
