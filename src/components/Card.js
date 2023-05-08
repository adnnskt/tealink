import React from 'react'
import {View, Text, StyleSheet, ImageBackground } from 'react-native'


export default props =>{


    return (
        <ImageBackground 
                source={props.image} 
                resizeMode="cover"
                style={style.image}>
            <View style={style.card}></View>
        </ImageBackground>
    )
}




const style = StyleSheet.create({
    card: {
        backgroundColor: "#fdf3f3",
        height: '80%',
        width: '30%',        
        borderRadius: 10,
    }
})