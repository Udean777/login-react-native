import React from 'react'
import Home from '../screens/Home'
import Feather from "react-native-vector-icons/Feather"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Button, Text } from 'react-native-paper'
import { useAuth } from '../../context/AuthContext'
import User from '../screens/User'

const Tabs = createBottomTabNavigator()

export default function BottomTabs() {
  const {onLogout} = useAuth()
  return (
     <Tabs.Navigator>
        {/* <Tabs.Screen
        name="Home"
        component={Home}
        options={{
        tabBarIcon: ({color}) => (
            <Feather name='home' color={color} size={20}/>
        ),
        headerShown: true,
        }}
      /> */}

      <Tabs.Screen
      name='User'
      component={User}
      options={{
        tabBarIcon: ({color}) => (
          <Feather name='user' color={color} size={20}/>
        )
      }}
      />
    </Tabs.Navigator>
  ) 
}
