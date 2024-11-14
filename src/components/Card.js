import React from 'react'
import {View, Text, StyleSheet, ImageBackground, Image, TouchableHighlight } from 'react-native'


export default props =>{


    return (
        <>    
            <View style={style.card}>
                <Image
                    source={props.image} 
                    resizeMode="contain"
                    style={style.image}>
                </Image>
                <Text style={style.text}>{props.text}</Text>
            </View>
        </>  
    )
}




const style = StyleSheet.create({
    card: {
        backgroundColor: "white",
        height: '100%',
        width: '100%',        
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        //boxShadow: '2%', 
        //shadowColor: 'black',
    },
    image:{
        height:'60%',
        width: '100%',
        
    },
    text:{
        paddingTop: '4%',
        //fontFamily: 'constructa-regular',
        fontSize: 15, 
        color: '#742828',
    },
    press:{
        width: '50%',
    }
})