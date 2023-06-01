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
        return <Box bg={{
          linearGradient: {
            colors: ['danger.200', 'danger.500'],
            start: [0, 0],
            end: [1, 0]
          }
        }} p="12" rounded="xl" _text={{
          fontSize: 'md',
          fontWeight: 'medium',
          color: 'warmGray.50',
          textAlign: 'center'
        }}>
            This is a Box with Linear Gradient
          </Box>;
      };
      
      const config = {
        dependencies: {
          'linear-gradient': LinearGradient
        }
      }

  return (
    <NativeBaseProvider config={config}>
      <Center flex={1} bg={{
          linearGradient: {
            colors: ['danger.200', 'danger.500'],
            start: [0, 0],
            end: [1.2, 0]
          }
        }}>
        <Component />
      </Center>
    </NativeBaseProvider>
  );
}