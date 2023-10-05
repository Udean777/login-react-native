import React from 'react'
import Login from '../screens/Login'
import { useAuth } from '../../context/AuthContext'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabs from './BottomTabs'

const Stack = createNativeStackNavigator()

export default function Navigation() {
    const {authState} = useAuth()
    
  return (
     <Stack.Navigator>
        {authState?.authenticated ? 
    ( 
    <Stack.Screen name="Home" component={BottomTabs} options={{
      headerShown: false
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
