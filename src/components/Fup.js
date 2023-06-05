import React from "react";
import { NativeBaseProvider, Text, Box, Center } from "native-base";
import {View, StyleSheet, ImageBackground} from 'react-native'
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
    const Component = () => {
        return <>  
            <View style={style.boxGroup}>
                <View style={style.flex}>
                    <Card image={crise} text='Crise'/>
                    <Card image={hiperfoco} text='Hiperfoco'/>
                    <Card image={introvertido} text='Introvertido'/>
                </View>
            </View>
            <View style={style.boxGroup}>
                <View style={style.flex}>
                    <Card image={terapia} text='Terapia'/>
                    <Card image={desfralde} text='Desfralde'/>
                    <Card image={remedio} text='Medicação'/>
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
      <Center flex={1} bg={{
          linearGradient: {
            colors: ['rose.100', 'rose.400', 'rose.500'],
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
        backgroundColor: "#fdf3f3",
        height: '80%',
        width: '30%',        
        borderRadius: 10,
    }
})