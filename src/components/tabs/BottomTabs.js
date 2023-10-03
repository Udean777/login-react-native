import React from 'react'
import Home from '../../screens/Home'
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from '../../screens/Login'
import { useAuth } from '../../context/AuthContext'

const Tabs = createBottomTabNavigator()

export default function BottomTabs() {
    const {authState, onLogout} = useAuth()
  return (
     <Tabs.Navigator>
        <Tabs.Screen
        name="Home"
        component={Home}
        options={{
        headerShown: false,
        tabBarIcon: ({color}) => (
            <Feather name='home' color={color} size={25}/>
        )
        }}
      />
        <Tabs.Screen name='Login' component={Login} options={{headerShown: false, tabBarShowLabel: false}}/>
    </Tabs.Navigator>
  ) 
}
