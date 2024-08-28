import React, {useState} from "react";
import { LinearGradient } from 'expo-linear-gradient'
import {TouchableOpacity, LayoutAnimation, NativeModules, TouchableHighlight, Text, Image, View, StyleSheet, ImageBackground, useWindowDimensions, ScrollView, Modal, Pressable, FlatList} from 'react-native'
const doctor = require("../../src/img/doctor.png") 


export default props => {
    

return (
    <>
        <View style={style.container}>
            <View style={style.ballons}>
                <View style={style.ballon}>

                </View>
                
                <View style={style.think1} />
                <View style={style.overThink2}>
                    <View style={style.think2} />
                </View>
                <View>
                    <View style={style.think3} />
                </View>
            </View>
           <View style={style.imgCover}>
                <Image   
                    style= {style.img}
                    source= {doctor}
                    resizeMode='cover'
                    >
                </Image>
           </View>
        </View>
    </>
  )
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f5cee7',
        justifyContent: 'space-around',
    },
    ballons: {
        width: '100%',
        height: '58%',
        //borderWidth: 2,
        //borderColor: 'red',
        //justifyContent: 'center',
        alignItems: 'center',
    },      
    ballon: {
        width: '92%',
        height: '70%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 40,
        elevation: 5,
        //padding: '2%',
    },  
    think1: {
        width: '15%',
        height: '15%',
        borderRadius: 60,
        backgroundColor: 'white',        
        borderWidth: 1,
        borderColor: 'grey',
        elevation: 5
    },
    overThink2: {
        width: '100%',
        height: '10%',
        paddingLeft: '35%',
    },
    think2: {
        width: '15%',
        height: '100%',
        borderRadius: 50,
        backgroundColor: 'white',        
        borderWidth: 1,
        borderColor: 'grey',
        elevation: 5,
    },
    think3: {
        width: '5%',
        height: '5%',
        borderRadius: 50,
        backgroundColor: 'white',        
        borderWidth: 1,
        borderColor: 'grey',
        elevation: 5,
    },
    imgCover: {
        width: '70%',
        height: '40%',
    },
    img: {
        width: '100%',
        height: '100%',
    }
})