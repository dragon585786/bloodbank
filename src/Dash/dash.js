import React, { Component } from "react";
import { StyleSheet, Text, View, Button,StatusBar } from "react-native";

export default class Dash extends Component {
  SignIn = () => {
    this.props.navigation.navigate("AuthLoading");
  };

  render() {
    return (
      <View>
        <View style={{ paddingTop: Expo.Constants.statusBarHeight }}></View>
        <StatusBar barStyle="default" />
        <Text>this is screen1</Text>
        <Button title="Go back To sign in" onPress={this.signIn} />
      </View>
    );
  }
}
