import React from "react";
//import { NativeBaseProvider, Text, Box, Center } from "native-base";
import {TouchableHighlight, Text, Image, View, StyleSheet, ImageBackground} from 'react-native'
import Card from './Card'
const backGround = require("../../src/img/background.png") 
const hiperfoco = require("../../src/img/hiperfoco.png") 
const crise = require("../../src/img/crise.png") 
const introvertido = require("../../src/img/introvertido.png") 
const terapia = require("../../src/img/terapia.png") 
const desfralde = require("../../src/img/desfralde.png") 
const remedio = require("../../src/img/remedio.png") 

const LinearGradient = require('expo-linear-gradient').LinearGradient;

export default props => {

        return (  
        <>
            <View style={style.boxGroup}>
                <View style={style.flex}>
                    <TouchableHighlight style= {style.card} onPress = {()=> console.warn('teste')}>
                        <Card image={crise} text='Crise'/>
                    </TouchableHighlight>
                    <TouchableHighlight style= {style.card} onPress = {null}>
                        <Card image={hiperfoco} text='Hiperfoco'/>
                    </TouchableHighlight>
                    <TouchableHighlight style= {style.card} onPress = {null}>
                        <Card image={introvertido} text='Introvertido'/>
                    </TouchableHighlight>
                </View>

            </View>
            
            <View style={style.boxGroup}>
                <View style={style.flex}>
                    <TouchableHighlight style= {style.card} onPress = {null}>   
                        <Card image={terapia} text='Terapia'/>
                    </TouchableHighlight>
                    <TouchableHighlight style= {style.card} onPress = {null}>
                        <Card image={desfralde} text='Desfralde'/>
                    </TouchableHighlight>
                    <TouchableHighlight style= {style.card} onPress = {null}>
                        <Card image={remedio} text='Medicação'/>
                    </TouchableHighlight>
                </View>
            </View>

        </>  
    )
}
      
const style = StyleSheet.create({
   
    boxGroup: {
        height: '30%',
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
    image:{
        height:'60%',
        width: '100%',
    }
})