import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import Screen1 from './src/Dash/screen1'
import Screen2 from './src/Dash/screen2'
import Screen3 from './src/Dash/screen3'
import signIn from './src/logins/signIn'
import regIn from './src/logins/register'

const signUp = "Incomple";

//const AppStack = createDrawerNavigator({Home:Screen1,Dono:Screen2,Contact:Screen3})

const AppStack = createDrawerNavigator({
  
  Screen1: { 
    screen: Screen1,
    navigationOptions: {
      title: "Demo Screen 1"
    }
  },
  Screen2: {
    screen: Screen2,
    navigationOptions: {
      title: "Demo Screen 2"
    }
  },
  Screen3: {
    screen: Screen3,
    navigationOptions: {
      title: "Demo Screen 3"
    }
  },
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: signIn,
    RegLoading:regIn,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));



