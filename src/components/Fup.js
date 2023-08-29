import React from "react";
//import { NativeBaseProvider, Text, Box, Center } from "native-base";
import {TouchableHighlight, Text, Image, View, StyleSheet, ImageBackground} from 'react-native'
import Card from './Card'
import { LinearGradient } from 'expo-linear-gradient'

export default props => {

    return (  
    <>
        <View style= {style.container}>
        <LinearGradient
        // Background Linear Gradient
        colors={['rgba(158, 166, 234, 0.966)', 'transparent']}
        style={style.background}
        />
            <View style= {style.overCard}>
                <View style= {style.card}>
                    <Text style= {style.textMid}>
                        O que é?
                    </Text>
                </View>
            </View>
            <View style={style.overFreq}>
                <View style= {style.freq}>
                    <View style= {style.freqElement}>
                    </View>
                </View>   
            </View>
        </View>
    </>  
    )
}
      
const style = StyleSheet.create({
   
    container: {
        height: '100%',
        backgroundColor: '#e4e9fb',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '80%',
    }, 
    backgroundTitle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '80%',
    },
     overCard: {
        height: '30%',
        width: '90%',
        backgroundColor: '#9090d0',
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
        borderColor: 'white',
    },
    overFreq:{
        height: '20%',
        width: '90%',
        paddingLeft: '5%',
        //backgroundColor: 'grey',
    },
    freq: {
        height: '100%',
        width: '100%',
        borderColor: 'black',
        borderLeftWidth: 1,
        paddingLeft: '3%',
        justifyContent: 'center',
    },
    freqElement: {
        height: '50%',
        width: '100%',
        backgroundColor: '#9090d0',
        borderRadius: 40,

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

/*

    <>
        <View style= {style.container}>
        <LinearGradient
        // Background Linear Gradient
        colors={['rgba(158, 166, 234, 0.966)', 'transparent']}
        style={style.background}
        />
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

    
*/ 