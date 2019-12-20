import React, { Component, Children } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  TextInput,
  Image,
  Alert,
  ToastAndroid,
  ActivityIndicator
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

//firebase initialization
import * as firebase from "firebase";

export default class regIn extends Component {
  state = {
    backgroundColor: "rgba(255,255,255,0.2)",
    backgroundColor1: "rgba(255,255,255,0.2)",
    backgroundColor2: "rgba(255,255,255,0.2)",
    backgroundColor3: "rgba(255,255,255,0.2)",
    username: "",
    email: "",
    password: "",
    passConfirm: ""
    //isReg: false
  };

  navigateToDash = (email, password, username, passConfirm) => {
    try {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (username == "") {
        ToastAndroid.showWithGravityAndOffset(
          "Name Invalid",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      } else if (reg.test(email) == false) {
        ToastAndroid.showWithGravityAndOffset(
          "Invalid Email",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      } else if (password.length < 6) {
        ToastAndroid.showWithGravityAndOffset(
          "Password must be 6 characters",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
        //console.log(this.state.passConfirm)
      } else if (password != passConfirm) {
        ToastAndroid.showWithGravityAndOffset(
          "Passwords don't match",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      } else {
        firebase
          .auth()
          .fetchSignInMethodsForEmail(email)
          .then(
            //response => (response[0] == 'password') ? Alert.alert("Email Already Exists") this.setState({isReg:true}) : console.log('No email')
            response => {
              if (response[0] == "password") {
                Alert.alert("Email Already Exists");
                return false;
              } else {
                console.log("Email Not Registered Go ahead :)");
                return true;
              }
            }
          )
          .then(response => {
            if (response == true) {
              firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(response => {
                  //  response.user.updateProfile({
                  //   displayName: username
                  // });
                  console.log(response)
                  firebase
                    .database()
                    .ref("users/" + response.user.uid)
                    .set({
                      displayName: username,  
                      email: response.user.email,
                      password: password,
                    })
                    .catch(error => {
                      console.log(error);
                    });
                })
              Alert.alert(" Sign Up Successfull ! Log In ");
              this.props.navigation.navigate("AuthLoading");
            }
          });
      }
    } catch (error) {
      console.log(error);
      console.log(email, password);
    }
  };

  navigateToSign = () => {
    this.props.navigation.navigate("AuthLoading");
    console.log("worked1");
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

        <Ionicons
          style={{ paddingLeft: 7 }}
          name="md-arrow-round-back"
          color="white"
          size={35}
          onPress={this.navigateToSign}
        />

        <View style={styleMain.upper}>
          <Image
            style={styleMain.img}
            source={require("./../../assets/logo.png")}
          />
        </View>

        <View style={styleMain.lower}>
          <TextInput
            style={{
              marginBottom: 17,
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
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
          <TextInput
            style={{
              marginBottom: 17,
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
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            style={{
              marginBottom: 17,
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
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
          />
          <TextInput
            style={{
              marginBottom: 17,
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
            autoCapitalize="none"
            placeholder="Confirm Password"
            onChangeText={passConfirm => this.setState({ passConfirm })}
          />
        </View>

        <View style={styleMain.bottom}>
          <View style={styleMain.btns}>
            <Button
              title="  REGISTER  "
              color="#df42d1"
              onPress={() =>
                this.navigateToDash(
                  this.state.email,
                  this.state.password,
                  this.state.username,
                  this.state.passConfirm
                )
              }
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  lower: {
    flex: 1.6,
    alignItems: "center",
    elevation: 2

    //backgroundColor:'green',
  },
  bottom: {
    flex: 1
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
