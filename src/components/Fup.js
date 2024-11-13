import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, Button, Pressable, Image } from 'react-native';
const logo = require("../../src/img/logo.png") 


export default function App() {
 

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
