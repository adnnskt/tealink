import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, Button, Pressable } from 'react-native';
const logo = require("../../src/img/logo.png") 


export default function App() {
 

  return (
    <View style={styles.container}>
      <View style = {style.logo}>
            <Image
              source={logo} 
              resizeMode="cover"
              style={style.image}>    
            </Image>
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
  
});
