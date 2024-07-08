import React, {useState} from "react";
import { Text, Image, View, StyleSheet,  Pressable, ScrollView, Modal, Switch} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome } from '@expo/vector-icons';

const timido = require("../../src/img/timido.jpg") 


export default props => {


    return(
        <>
        <View style={style.container}>
        <LinearGradient
            colors={['rgba(25,0,255,0.15449929971988796)', 'rgba(248,247,255,0)','rgba(251,251,251,0.9136029411764706)']}
            style={style.background}


        />
            <View style= {style.ballonsTxt}>
            </View>

            
            <View style= {style.imgCover}>
                <Image
                    style= {style.img}
                    source= {timido}
                    resizeMode='cover'
                    />
            </View>

        </View>
        
        </>
    )
}


const style = StyleSheet.create({

    container: {
        flex: 1,
        //height: '100%',
        justifyContent: 'space-around',
        backgroundColor: '#bc90f5',
        alignItems: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    }, 
    ballonsTxt: {
        height: '40%',
        width: '95%',
        borderColor: 'red',
        borderWidth: 2,
    },  
    imgCover: {
        height: '40%',
        width: '100%',
        levitation: 4,
        //borderColor: 'red',
        //borderWidth: 2,
    },

    img: {
        width: '100%',
        height: '100%', 
      },

})
