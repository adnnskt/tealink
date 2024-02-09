import React, {useState} from "react";
import {TouchableOpacity, LayoutAnimation, NativeModules, TouchableHighlight, Text, Image, View, StyleSheet, ImageBackground, useWindowDimensions, ScrollView, Modal, Pressable, FlatList} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Slider, RangeSlider } from '@react-native-assets/slider';

const isolamento = require("../img/isolamento.png") 
const poucosAmigos = require("../img/poucosAmigos.png") 
const vergonhaPublico = require("../img/vergonhaPublico.png") 
const cansadoDeFalar = require("../img/cansadoDeFalar.png") 
const prefereMensagem = require("../img/prefereMensagem.png") 

export default props => {

    let jsonList =  [
        {
            id: '1',
            image: isolamento,
            txt: 'isolamento'
        },
        {
            id: '2',
            image: poucosAmigos,
            txt: 'poucosAmigos'
        },
        {
            id: '3',
            image: vergonhaPublico,
            txt: 'vergonhaPublico'
        },
        {
            id: '4',
            image: cansadoDeFalar,
            txt: 'cansadoDeFalar'
        },
        {
            id: '5',
            image: prefereMensagem,
            txt: 'prefereMensagem'
        },
    ]
    

    return (
    <>
        <Text>text</Text>


        




    </>
    )
}