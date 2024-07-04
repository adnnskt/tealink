import React, {useState} from "react";
import { Text, Image, View, StyleSheet,  Pressable, ScrollView, Modal, Switch} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome } from '@expo/vector-icons';

const menino = require("../../src/img/meninoBanheiro.jpg") 
const meninoDormindo = require("../../src/img/meninoDormindo.jpg") 


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

            
            <View style= {style.ballonsTxt}>
                <Image
                    style= {style.img}
                    source= {item.image}
                    resizeMode='contain'
                    >
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
    

})
