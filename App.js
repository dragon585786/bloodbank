import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import Dash from './src/Dash/dash'
import Screen2 from './src/Dash/screen2'
import Screen3 from './src/Dash/screen3'
import signIn from './src/logins/signIn'
import regIn from './src/logins/register'

const signUp = "Incomple";


//FireBase Configuration :
import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCvbIYXUQC-7W7klJU-ah0I_-Ly63unTcE",
  authDomain: "digi-doc-c6732.firebaseapp.com",
  databaseURL: "https://digi-doc-c6732.firebaseio.com",
  projectId: "digi-doc-c6732",
  storageBucket: "digi-doc-c6732.appspot.com",
  messagingSenderId: "843363585221",
  appId: "1:843363585221:web:0f5fd22447bc53973634ac",
  measurementId: "G-C2BDYW19DS"
};
firebase.initializeApp(firebaseConfig);
// : end

//const AppStack = createDrawerNavigator({Home:Screen1,Dono:Screen2,Contact:Screen3})

const AppStack = createDrawerNavigator({
  
  dashboard: { 
    screen: Dash,
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
    initialRouteName: 'App',
  }
));



