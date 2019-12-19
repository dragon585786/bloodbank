import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  TextInput,
  Image,
  ActivityIndicator
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";


import * as firebase from "firebase";

export default class signIn extends Component {
  state = {
    backgroundColor: "rgba(255,255,255,0.2)",
    backgroundColor1: "rgba(255,255,255,0.2)",
    email:'',
    password:'',
  };

  navigateToDash = () => {
    this.props.navigation.navigate("App");
    console.log("worked");
  };

  navigateToReg = () => {
    this.props.navigation.navigate("RegLoading");
    console.log("worked");
  };

  onFoc = () => {
    this.setState({
      backgroundColor: "white",
      borderRadius: 15,
      color: "#272343"
    });
  };

  onFoc1 = () => {
    this.setState({
      backgroundColor1: "white",
      borderRadius1: 15,
      color1: "#10316b"
    });
  };

  render() {
    return (
      <LinearGradient
        style={styleMain.container}
        colors={["#5edfff", "#494ca2", "#aa26da"]}
      >
        <View style={{ paddingTop: Expo.Constants.statusBarHeight }}></View>
        <StatusBar barStyle="default" />

        <View style={styleMain.upper}>
          <Image
            style={styleMain.img}
            source={require("./../../assets/logo.png")}
          />
        </View>

        <View style={styleMain.lower}>
          <TextInput
            style={{
              marginBottom: 20,
              flex: 1,
              fontFamily: "Roboto",
              height: 70,
              width: 270,
              color: this.state.color,
              fontWeight: "bold",
              backgroundColor: this.state.backgroundColor,
              fontSize: 18,
              textAlign: "center",
              borderRadius: this.state.borderRadius
            }}
            placeholder="Email Id"
            onFocus={this.onFoc}
            autoCapitalize='none'
          />
          <TextInput
            style={{
              marginBottom: 20,
              flex: 1,
              fontFamily: "Roboto",
              height: 70,
              width: 270,
              color: this.state.color1,
              fontWeight: "bold",
              backgroundColor: this.state.backgroundColor1,
              fontSize: 18,
              textAlign: "center",
              borderRadius: this.state.borderRadius1
            }}
            onFocus={this.onFoc1}
            secureTextEntry={true}
            autoCapitalize='none'
            placeholder="Password"
          />
        </View>

        <View style={styleMain.bottom}>
          <View style={styleMain.btns}>
            <Button
              title="  Sign in  "
              color="#df42d1"
              onPress={this.navigateToDash}
            />
            <Button
              title="  Sign up  "
              color="#df42d1"
              onPress={this.navigateToReg}
            />
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styleMain = StyleSheet.create({
  container: {
    //backgroundColor: "#f67280",

    flex: 1
  },
  upper: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center"
  },
  lower: {
    flex: 1,
    alignItems: "center",
    elevation: 2

    //backgroundColor:'green',
  },
  bottom: {
    flex: 2
  },
  img: {
    height: 70,
    width: 300

    //elevation:3,
  },
  btns: {
    flexDirection: "row",
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "space-around"
  }
});
