import React, {useState} from "react";
import {TouchableHighlight, Text, Image, View, StyleSheet, ImageBackground, useWindowDimensions, ScrollView, Modal, Pressable, FlatList} from 'react-native'
import Card from './Card'
import { LinearGradient } from 'expo-linear-gradient'
import { Slider, RangeSlider } from '@react-native-assets/slider';


export default props => {

    return (
    <>
        <View style= {style.container}>
            <Text style = {style.txtG}>
                Abaixo algumas ideias que podem ser úteis para auxiliar com o hiperfoco.
            </Text>

        </View>
    </>
    )
}

const style = StyleSheet.create({

    container: {
        height: '100%',
        backgroundColor: '#e4e9fb',
    },
    txtG: {
        //fontFamily: 'aria-busy', 
        paddingLeft: '2%',
        fontSize: 25,
        fontWeight: 100,
        fontStyle: 'normal',
    },

})