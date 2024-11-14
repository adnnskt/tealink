import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, Button, Pressable, Image, ScrollView } from 'react-native';
const logo = require("../../src/img/logo.png") 
import Card from './Card'
const backGround = require("../../src/img/background.png") 
const hiperfoco = require("../../src/img/hiperfoco.png") 
const crise = require("../../src/img/crise.png") 
const introvertido = require("../../src/img/introvertido.png") 
const terapia = require("../../src/img/terapia.png") 
const desfralde = require("../../src/img/desfralde.png") 
const remedio = require("../../src/img/remedio.png") 
const logo = require("../../src/img/logo.png") 


export default function App() {
 
  let jsonList =  [
    {
        id: '1',
        image: crise,
        txt: 'Crise',
    },
    {
        id: '2',
        image: hiperfoco,
        txt: 'Hiperfoco',
    },
]



  const Item = ({item}) => (
    <>
        <View style={[style.item, {width}]}>
          <View style={style.flex}>
            <TouchableHighlight style= {style.card} onPress = {()=> props.navigation.navigate('Crise', {user: data})}>
                <Card image={crise} text='Crise'/>
            </TouchableHighlight>
          </View>
        </View> 
    </>
)

  return (
    <View style={styles.container}>
      <View style = {styles.logo}>
        <View style = {styles.underLogo}>
            <Image
              source={logo} 
              resizeMode= "contain"//"cover"
              style={styles.image}>    
            </Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    height:'20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff',
    //paddingTop: '5%',
    //borderWidth: '3',
    //borderColor: 'blue',
  },
  underLogo: {
    height:'100%',
    width: '90%',   
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 3,
    borderColor: 'blue',
  },
  image: {
    height:'80%',
    width: '100%',
  },
  
});
