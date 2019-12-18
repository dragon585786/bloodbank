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

export default class regIn extends Component {
  state = {
    backgroundColor: "rgba(255,255,255,0.2)",
    backgroundColor1: "rgba(255,255,255,0.2)",
    backgroundColor2: "rgba(255,255,255,0.2)",
    backgroundColor3: "rgba(255,255,255,0.2)"
  };

  navigateToDash = () => {
    this.props.navigation.navigate("App");
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
  onFoc2 = () => {
    this.setState({
      backgroundColor2: "white",
      borderRadius2: 15,
      color1: "#10316b"
    });
  };
  onFoc3 = () => {
    this.setState({
      backgroundColor3: "white",
      borderRadius3: 15,
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
            placeholder="UserName"
            onFocus={this.onFoc}
          />
          <TextInput
            style={{
              marginBottom: 20,
              flex: 1,
              fontFamily: "Roboto",
              height: 70,
              width: 270,
              color: this.state.color,
              fontWeight: "bold",
              backgroundColor: this.state.backgroundColor2,
              fontSize: 18,
              textAlign: "center",
              borderRadius: this.state.borderRadius2
            }}
            placeholder="Email"
            onFocus={this.onFoc2}
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
            placeholder="Password"
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
              backgroundColor: this.state.backgroundColor3,
              fontSize: 18,
              textAlign: "center",
              borderRadius: this.state.borderRadius3
            }}
            onFocus={this.onFoc3}
            secureTextEntry={true}
            placeholder="Password"
          />
        </View>

        <View style={styleMain.bottom}>
          <View style={styleMain.btns}>
            <Button
              title="  REGISTER  "
              color="#df42d1"
              onPress={this.navigateToDash}
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
    flex: 2,
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
