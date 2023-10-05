// AppNavigator.js
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import TabUser from '../Tabs/TabUser';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const UserNavigation = () => {
  return (
    <NavigationContainer independent={true}>
    <Tab.Navigator>
      <Tab.Screen name="Posts" component={Home} />
      <Tab.Screen name="Albums" component={TabUser} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default UserNavigation;
