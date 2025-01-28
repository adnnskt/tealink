import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, useWindowDimensions, Button, Pressable, TouchableHighlight, Image, ScrollView } from 'react-native';
const logo = require("../../src/img/logo.png") 
const charts = require("../../src/img/charts.png") 
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
      txt: 'Introvertido',
    },
    {
      id: '4',
      image: terapia,
      txt: 'Terapia',
    },
    {
      id: '5',
      image: desfralde,
      txt: 'Desfralde',
    },
    {
      id: '6',
      image: remedio,
      txt: 'Remedio',
    },
]

//const {width} = useWindowDimensions()


  const Item = ({item}) => (
    <>
        <View style={styles.item}>
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
                <FlatList //adicionar uma view list container
                    data={jsonList}
                    renderItem={({item}) => <Item item={item}/>}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={true}
                    contentContainerStyle={{ paddingHorizontal: 15 }}
                    //pagingEnabled
                    //bounces={false}
                    //style={styles.list}
                />
        </View>

        <View style={styles.fupContainer}>
          <View style={styles.fupViwe}>
            <View>
              <Image
                source={charts} 
                resizeMode="contain" // "cover"
                style={styles.imageChart}>    
              </Image>
            </View>

            <View>
              <Image
                source={charts} 
                resizeMode="contain" // "cover"
                style={styles.imageChart}>    
              </Image>
            </View>
          </View>    
          <View style={styles.fupViwe}>
          
          </View>    
        
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

    //borderWidth: 3,
    //borderColor: 'blue',
  },
  image: {
    height:'80%',
    width: '100%',
  },
  imageChart: {
    height:'80%',
    width: '98%',
  },
  item: {
    marginHorizontal: 15,
    
  },
  flex: {
    //flexGrow: 1,
    flexDirection: 'row',
    height: '100%',
    width: '30%',
    justifyContent: "flex-start",
    alignItems: 'center',
},
  list: {
    width: '90%',
  },
  listView: {
    height:'30%',
    width: '95%',
},
  card: {
    //backgroundColor: "#fdf3f3",
    height: 170,
    width: 120,        
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    //boxShadow: '2%', 
    //shadowColor: 'black',
},
  fupContainer: {
    height: '40%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fupViwe: {
    width: '48%',
    height: '95%',
    borderRightWidth: 1,
    padding: '2%',
    borderRightColor: 'grey',
    alignItems: 'center',
    justifyContent: 'space-around', 
  }
});
