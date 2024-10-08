
import React from "react";
import { NativeBaseProvider, Text, Box, Center, Pressable } from "native-base";
import {View, Image, StyleSheet, ImageBackground, TouchableHighlight} from 'react-native'
import Card from './Card'
const backGround = require("../../src/img/background.png") 
const hiperfoco = require("../../src/img/hiperfoco.png") 
const crise = require("../../src/img/crise.png") 
const introvertido = require("../../src/img/introvertido.png") 
const terapia = require("../../src/img/terapia.png") 
const desfralde = require("../../src/img/desfralde.png") 
const remedio = require("../../src/img/remedio.png") 
const logo = require("../../src/img/logo.png") 


const LinearGradient = require('expo-linear-gradient').LinearGradient;

export default props => {
    const Component = () => {
      const data = props.user

        return <>  
            <View style={style.boxGroup}>
                <View style={style.flex}>
                    <TouchableHighlight style= {style.card} onPress = {()=> props.navigation.navigate('Crise', {user: data})}>
                        <Card image={crise} text='Crise'/>
                    </TouchableHighlight>
                    <TouchableHighlight style= {style.card} onPress = {()=> props.navigation.navigate('Hiperfoco', {user: data})}>
                        <Card image={hiperfoco} text='Hiperfoco'/>
                    </TouchableHighlight>
                    <TouchableHighlight style= {style.card} onPress = {()=> props.navigation.navigate('Introvertido', {user: data})}>
                        <Card image={introvertido} text='Introvertido'/>
                    </TouchableHighlight>
                </View>

            </View>
            
            <View style={style.boxGroup}>
                <View style={style.flex}>
                    <TouchableHighlight style= {style.card} onPress = {()=> props.navigation.navigate('Terapia', {user: data})}>   
                        <Card image={terapia} text='Terapia'/>
                    </TouchableHighlight>
                    <TouchableHighlight style= {style.card} onPress = {()=> props.navigation.navigate('Desfralde', {user: data})}>
                        <Card image={desfralde} text='Desfralde'/>
                    </TouchableHighlight>
                    <TouchableHighlight style= {style.card} onPress = {()=> props.navigation.navigate('Medicamento', {user: data})}>
                        <Card image={remedio} text='Medicação'/>
                    </TouchableHighlight>
                </View>
            </View>
    </>  
}
      
      const config = {
        dependencies: {
          'linear-gradient': LinearGradient
        }
      }
    
  return (
    <NativeBaseProvider config={config}>
      <View style = {style.logo}>
            <Image
              source={logo} 
              resizeMode="cover"
              style={style.image}>    
            </Image>
      </View>
      <Center /*flex={1}*/ bg={{
          linearGradient: {
            colors: ['white', 'lightText'],
            start: [0, 0],
            end: [1.2, 0]
          }
        }}>
        <Component />
      </Center>
    </NativeBaseProvider>
  );
}



const style = StyleSheet.create({
   
    boxGroup: {
        height: '40%',
        width: '100%',
        //borderWidth: 3,
        //borderColor: 'red',
        backgroundColor: '#fff',
        elevation: 5,
    },
    flex: {
        //flexGrow: 1,
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        justifyContent: "space-around",
        alignItems: 'center',
    },
    card: {
      //backgroundColor: "#fdf3f3",
      height: '80%',
      width: '30%',        
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 10,
      //boxShadow: '2%', 
      //shadowColor: 'black',
    },
    image: {
      height:'88%',
      width: '68%',
    },
    logo: {
      height:'20%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#fff',
      paddingTop: '5%',
      //borderWidth: '3',
      //borderColor: 'blue',
    }
})