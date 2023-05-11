import React from 'react'
import {View, Text, StyleSheet, ImageBackground, Image } from 'react-native'


export default props =>{


    return (
      <>  
        <View style={style.card}>
            <Image
                source={props.image} 
                resizeMode="cover"
                style={style.image}>
            </Image>
            <Text style={style.text}>{props.text}</Text>
        </View>
      </>  
    )
}




const style = StyleSheet.create({
    card: {
        backgroundColor: "#fdf3f3",
        height: '80%',
        width: '30%',        
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        //boxShadow: '2%', 
        //shadowColor: 'black',
    },
    image:{
        height:'60%',
        width: '60%',
        
    },
    text:{
        paddingTop: '4%',
        //fontFamily: 'constructa-regular',
        fontSize: 15, 
        color: '#742828',
    }
})