import { DarkTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { Drawer, DrawerSection } from 'react-native-paper';

const TabUser = ({ navigation }) => {
  return (
    <View>
      <Drawer.Section>
        <Drawer.Item
          label="Item 1"
          onPress={() => console.log('Item 1 pressed')}
        />
        <Drawer.Item
          label="Item 2"
          onPress={() => console.log('Item 2 pressed')}
        />
      </Drawer.Section>
    </View>
  );
};

export default TabUser;
