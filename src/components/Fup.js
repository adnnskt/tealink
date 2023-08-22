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
        <View style= {style.container}>
            <View style= {style.overTitle}>
                <View style= {style.title}>
                    <Text style= {style.textTitle}>
                        Crise
                    </Text>
                </View>
            </View>
        </View>
    </>  
    )
}
      
const style = StyleSheet.create({
   
    container: {
        height: '100%',
        backgroundColor: 'white'
    },
    overTitle: {
        height: '15%',
        paddingTop: '5%',
    },
    title: {
        height: '100%',
        width: '55%',
        backgroundColor: '#01b6b6',
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        elevation: 5,
        justifyContent: 'center',
    },
    textTitle: {
        color: 'white',
        paddingLeft: '5%',
        fontSize: 25,
    }
})