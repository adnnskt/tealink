import React from "react";
import { NativeBaseProvider, Box, Center, Text} from "native-base";
import {View, StyleSheet, ImageBackground} from 'react-native'

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
        paddingTop="3%"
        height="10%"
        width="50%"
      >
        <Box 
          bg="primary.500"
          width="100%"
          height="100%"
          borderRightRadius="60"
          shadow="3"
          justifyContent="center"
          
        >
          <Text
            paddingLeft="3%"
            fontSize="xl"
            color="white"
          >
             Crise 
          </Text>
        </Box>

      </Box>
 
      <Box
        paddingTop="3%"
        width="80%"
        height="75%"
      >
        <Box
          bg="purple.900"
          width="100%"
          height="100%"
          borderRightRadius="40"
        >
          
        </Box>         
      </Box>

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