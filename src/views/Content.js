import React from "react";
import { NativeBaseProvider, Box, Center } from "native-base";
import {View, StyleSheet, ImageBackground, Text} from 'react-native'

const LinearGradient = require('expo-linear-gradient').LinearGradient;

export default props => {
        return <>  
            <View>
              <Text>Teste</Text>
            </View>
    </>  
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