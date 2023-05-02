import React from 'react'
import {Text, View, StyleSheet, ImageBackground} from 'react-native'
const backGround = require("../../src/img/background.png") 

export default props => {

    const lado = 50 
    return (
    <>  
        <View style={style.containner}>
            <ImageBackground 
                source={backGround} 
                resizeMode="cover"
                style={style.image}>
            
            <View style={style.topColor}></View>

            <View style={style.boxGroup}>
                <View style={style.flex}>
                    <View style={style.card}></View>
                    <View style={style.card}></View>
                    <View style={style.card}></View>
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
        borderWidth: 3,
        borderColor: 'red',
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
        backgroundColor: "#000",
        height: '80%',
        width: '30%'        
    }
})