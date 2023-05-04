import React from 'react'
import {View, Text, StyleSheet } from 'react-native'


export default props =>{


    return (
        <View style={style.card}></View>
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