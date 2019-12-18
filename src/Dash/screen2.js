import React, { Component } from "react";
import { StyleSheet, Text, View,StatusBar } from "react-native";

export default class Screen1 extends Component {
  render() {
    return (
      <View>
        <View style={{ paddingTop: Expo.Constants.statusBarHeight }}></View>
        <StatusBar barStyle="default" />
        <Text>this is screen2</Text>
      </View>
    );
  }
}
