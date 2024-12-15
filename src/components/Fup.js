import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, useWindowDimensions, Button, Pressable, TouchableHighlight, Image, ScrollView } from 'react-native';
const logo = require("../../src/img/logo.png") 
import Card from './Card'
const backGround = require("../../src/img/background.png") 
const hiperfoco = require("../../src/img/hiperfoco.png") 
const crise = require("../../src/img/crise.png") 
const introvertido = require("../../src/img/introvertido.png") 
const terapia = require("../../src/img/terapia.png") 
const desfralde = require("../../src/img/desfralde.png") 
const remedio = require("../../src/img/remedio.png") 


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
    {
      id: '3',
      image: introvertido,
      txt: 'introvertido',
    },
    {
      id: '4',
      image: terapia,
      txt: 'terapia',
    },
]

const {width} = useWindowDimensions()


  const Item = ({item}) => (
    <>
        <View style={[styles.item, {width}]}>
          <View style={styles.flex}>
            <TouchableHighlight style= {styles.card} onPress = {null /*()=> props.navigation.navigate(item.txt, {user: data})*/}>
                <Card image={item.image} text={item.txt}/>
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
      <View style = {styles.listView}> 
                <FlatList //adicionar uma list container
                    data={jsonList}
                    renderItem={({item}) => <Item item={item}/>}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator
                    pagingEnabled
                    bounces={false}
                />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    //height: '100%',
    //with:'100%',
    justifyContent: 'space-between',
    alignItems:'space-between',
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
  item: {
    width:'30%',
    
  },
  flex: {
    //flexGrow: 1,
    flexDirection: 'row',
    height: '100%',
    width: '30%',
    justifyContent: "flex-start",
    alignItems: 'center',
},
  listView: {
    height:'30%',
    width: '95%',
},
  card: {
    //backgroundColor: "#fdf3f3",
    height: '80%',
    width: '100%',        
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    //boxShadow: '2%', 
    //shadowColor: 'black',
},
  
});
