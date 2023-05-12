import React from 'react'
import {Text, View, StyleSheet, ImageBackground} from 'react-native'
import Card from './Card'
const backGround = require("../../src/img/background.png") 
const hiperfoco = require("../../src/img/hiperfoco.png") 
const crise = require("../../src/img/crise.png") 
const introvertido = require("../../src/img/introvertido.png") 



export default props => {

    const lado = 50 
    return (
    <>  
        <View style={style.containner}>
            <ImageBackground 
                source={backGround} 
                resizeMode="cover"
                style={style.image}>

            <View style={style.boxGroup}>
                <View style={style.flex}>
                    <Card image={crise} text='Crise'/>
                    <Card image={hiperfoco} text='Hiperfoco'/>
                    <Card image={introvertido} text='Introvertido'/>
                </View>
            </View>
            <View style={style.boxGroup}>
                <View style={style.flex}>
                    <View style={style.card}></View>
                    <View style={style.card}></View>
                    <View style={style.card}></View>
                </View>
            </View>
        </ImageBackground>    
        </View>
    </>  
    )
}


const style = StyleSheet.create({
    containner: {
        //flexGrow: 1,
        height: '100%',
        width: '100%',
        //justifyContent: 'space-between',
        alignItems: 'center',
    },
    boxGroup: {
        height: '30%',
        width: '100%',
        //borderWidth: 3,
        //borderColor: 'red',
        backgroundColor: '#e88181',
        elevation: 5,
    },
    image:{
        flex: 1,
        justifyContent: 'center',
    },
    flex: {
        //flexGrow: 1,
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        justifyContent: "space-around",
        alignItems: 'center',
    },
    card: {
        backgroundColor: "#fdf3f3",
        height: '80%',
        width: '30%',        
        borderRadius: 10,
    }
})