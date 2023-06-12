import React from "react";
import { NativeBaseProvider, Text, Box, Center } from "native-base";
import {View, StyleSheet, ImageBackground} from 'react-native'

const LinearGradient = require('expo-linear-gradient').LinearGradient;

export default props => {
    const Component = () => {
        return <>  
            <View style={style.boxGroup}>
              <Text>Teste</Text>
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
            colors: ['rose.100'],
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