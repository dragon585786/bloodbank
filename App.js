import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import Screen1 from './screen1'
import Screen2 from './screen2'
import Screen3 from './screen3'

const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: { //Title
    screen: Screen1,
    navigationOptions: {
      title: "Demo Screen 1"
    }
  },
  Screen2: {//Title
    screen: Screen2,
    navigationOptions: {
      title: "Demo Screen 2"
    }
  },
  Screen3: {//Title
    screen: Screen3,
    navigationOptions: {
      title: "Demo Screen 3"
    }
  },
});
export default createAppContainer(DrawerNavigatorExample);