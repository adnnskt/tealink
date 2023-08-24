import React from "react";
//import { NativeBaseProvider, Text, Box, Center } from "native-base";
import {TouchableHighlight, Text, Image, View, StyleSheet, ImageBackground} from 'react-native'
import Card from './Card'
import { LinearGradient } from 'expo-linear-gradient';

const LinearGradient = require('expo-linear-gradient').LinearGradient;

export default props => {

    return (  
    <>
        <View style= {style.container}>
            <View style= {style.overTitle}>
                <View style= {style.title}>
                    <Text style= {style.textTitle}>
                        Crise
                    </Text>
                </View>
            </View>
            <View style= {style.overCard}>
                <View style= {style.card}>
                    <Text style= {style.textMid}>
                        O que é?
                    </Text>
                </View>
            </View>
            <View style= {style.overAdd}>
                <View style= {style.add}>
                    <Text style= {style.textAdd}>
                        Adicionar frequência
                    </Text>
                </View>
            </View>
        </View>
    </>  
    )
}
      
const style = StyleSheet.create({
   
    container: {
        height: '100%',
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    overTitle: {
        height: '15%',
        paddingTop: '5%',
    },
    title: {
        height: '100%',
        width: '55%',
        backgroundColor: '#01b6b6',
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        elevation: 5,
        justifyContent: 'center',
    },
    textTitle: {
        color: 'white',
        paddingLeft: '5%',
        fontSize: 25,
    },
    overCard: {
        height: '70%',
        width: '80%',
        backgroundColor: '#d4d6d6',
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
    },
    card: {

    },
    textMid: {
        paddingTop: '5%',
        paddingLeft: '5%',
        fontSize: 20,
        color: 'grey',
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    overAdd:{
        height: '8%',
        width: '80%',
        backgroundColor: '#d4d6d6',
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
    },
    add:{
        justifyContent: 'center',
        height: '100%',
    },
    textAdd:{
        paddingLeft: '5%',
        fontSize: 20,
        color: 'grey',
    }
})