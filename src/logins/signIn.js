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
import * as Font from "expo-font";

export default class signIn extends Component {
  state = {
    backgroundColor: "rgba(255,255,255,0.2)",
    backgroundColor1: "rgba(255,255,255,0.2)",
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "DancingScript-Bold": require("./../../assets/fonts/DancingScript-Bold.ttf"),
      "DancingScript-Medium": require("./../../assets/fonts/DancingScript-Medium.ttf"),
      "DancingScript-Regular": require("./../../assets/fonts/DancingScript-Regular.ttf"),
      "DancingScript-SemiBold": require("./../../assets/fonts/DancingScript-SemiBold.ttf")
    }).then(() => {
      this.setState({ fontLoaded: true });
      console.log("done");
    });
  }

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
              onPress={this.navigateToDash}
            />
          </View>

          {this.state.fontLoaded==true ? (
            <Text style={styleMain.title}>BloodBank</Text>
          ) : (
            <ActivityIndicator />
          )}
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
  title: {
    paddingTop: 60,
    color: "white",
    fontWeight: "700",
    fontSize: 50,
    textAlign: "center",
    fontFamily: "DancingScript-Regular",
    elevation: 1
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
    height: 200,
    width: 200
    //elevation:3,
  },
  btns: {
    flexDirection: "row",
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "space-around"
  }
});
