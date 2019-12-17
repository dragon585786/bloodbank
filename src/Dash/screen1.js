import React, { Component } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class Screen1 extends Component {

    SignIn=()=>{
        this.props.navigation.navigate('AuthLoading')
    }

    render (){
        return(
        <View>
            <Text>this is screen1</Text>
            <Button title="Go back To sign in" onPress={this.signIn}/>
        </View>
        )
        
    }
}