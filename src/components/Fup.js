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
        borderWidth: 2,
        borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },      
    ballon: {
        width: '85%',
        height: '55%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 40,
        //padding: '2%',
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