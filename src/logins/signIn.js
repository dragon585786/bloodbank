import React, { Component } from 'react';
import { StyleSheet, Text, View,Button,StatusBar, TextInput, } from 'react-native';




export default class signIn extends Component {

    navigateToDash = () =>{
        this.props.navigation.navigate('App');
        console.log("worked")
    };

    render (){
        return(
            
            <View style={styleMain.container}>

                <View style={{paddingTop: Expo.Constants.statusBarHeight}}></View>
                <StatusBar barStyle='default'/>

                <View style={styleMain.upper}>
                    <Text style={styleMain.title}>BloodBank</Text>    
                </View>
                
                <View style={styleMain.lower}>
                        
                    <TextInput
                        style={styleMain.text}
                        placeholder="UserName"
                    /> 
                    <TextInput
                        style={styleMain.text}
                        placeholder="Password"
                    /> 
                </View>  
                    
                <View style={styleMain.bottom}>
                    <Button title="Sign in" onPress={this.navigateToDash} />
                </View> 
                
            </View>
        
        )
        
    }
}

const styleMain = StyleSheet.create({
    container :{
        backgroundColor:'#f67280',
        flex:1,
    },
    upper:{
        flex:1.5,
        alignItems:"center",
        justifyContent:'center',
        
        //backgroundColor:'red',
    },
    title:{
        color:"white",
        fontWeight:"700",
        fontSize:50,
    },
    lower:{
        flex:1,
        alignItems:"center",
        justifyContent:'space-around',
        backgroundColor:"rgba(255,255,255,0.2)",
        marginBottom:20,
        marginLeft:50,
        marginRight:50,
        //backgroundColor:'green',
    },
    text:{
        height:60,
        
    },
    bottom:{
        flex:2,
        alignItems:"center",
        justifyContent:'flex-start',
        //backgroundColor:'blue',
        
    },
    
})