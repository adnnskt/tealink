import React from "react";
import { NativeBaseProvider, Box, Center } from "native-base";
import {View, StyleSheet, ImageBackground, Text} from 'react-native'

const LinearGradient = require('expo-linear-gradient').LinearGradient;

export default props => {


  const Content = () => {
    
    return <Box flex={1} bg={{
      linearGradient: {
        colors: ['primary.200', 'violet.600'],
        start: [0, 0.2],
        end: [1.2, 1]
      }
    }}>
        <Box 
          bg="primary.500"
          width="50%"
          height="10%"
          borderRightRadius="60"
          shadow="5"
        >BOX teste</Box>
      
    </Box>
  }



  const config = {
    dependencies: {
      'linear-gradient': LinearGradient
    }
  }

  return (
    <NativeBaseProvider config={config}>
      <Content>
      </Content>   
    </NativeBaseProvider>
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
        backgroundColor: "#fdf3f3",
        height: '80%',
        width: '30%',        
        borderRadius: 10,
    }
})