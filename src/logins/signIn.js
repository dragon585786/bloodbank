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

                <View style={styleMain.main}>
                 
                    <View style={styleMain.upper}>
                        <Text>BloodBank</Text>    
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
                
            </View>
        
        )
        
    }
}

const styleMain = StyleSheet.create({
    container :{
        backgroundColor:'#f67280',
        flex:1,
    },
    main:{
        alignItems:"center",
        justifyContent:'center',
        flex:1,
    },
    upper:{
        flex:2,
        alignItems:"center",
        justifyContent:'center',
        //backgroundColor:'red',
    },
    lower:{
        flex:1,
        alignItems:"center",
        justifyContent:'flex-start',
        //backgroundColor:'green',
    },
    text:{
        height:50,
        marginBottom:10,
        backgroundColor:"white",
    },
    bottom:{
        flex:2,
        alignItems:"center",
        justifyContent:'flex-start',
        //backgroundColor:'blue',
        
    },
    
})