import React, {useState} from "react";
import { LinearGradient } from 'expo-linear-gradient'
import {TouchableOpacity, LayoutAnimation, NativeModules, TouchableHighlight, Text, Image, View, StyleSheet, ImageBackground, useWindowDimensions, ScrollView, Modal, Pressable, FlatList} from 'react-native'


export default props => {



    return (
        <>
            <View style={style.container}>
                    <View style={style.boxSides}>
                        <View style={style.leftSide}>
                            <View style={style.lContent}></View>
                            <View style={style.lContent}></View>
                            <View style={style.lContent}></View>
                            <View style={style.lContent}></View>
                            <View style={style.lContent}></View>
                            

                        </View>
                        <View style={style.rightSide}>
                            <View style={style.rContent}></View>
                            <View style={style.rContent}></View>
                            <View style={style.rContent}></View>
                            <View style={style.rContent}></View>
                            <View style={style.rContent}></View>
                            
                            
                        </View>
                    </View>  
           </View>
        </>
    )
}

const style = StyleSheet.create({

    container: {
        //flex: 1,
        backgroundColor: '#f5cee7',
        //justifyContent: 'space-around',
    },

    scroll:{
        width:'100%',
        height: '100%',

    },
    boxSides:{
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },

    leftSide: {
        width:'50%',
        height: '100%',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent:'space-around'
    },
    lContent: {
        width:'95%',
        height:'15%',
        backgroundColor:'grey',
    },
    rightSide: {
        width:'50%',
        height: '100%',
        backgroundColor: 'blue',
        paddingTop: '10%',
        alignItems: 'center',
        justifyContent:'space-around',
    },
    rContent:{
        width:'95%',
        height:'15%',
        backgroundColor:'grey',

    },

})