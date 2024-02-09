import React, {useState} from "react";
import {TouchableOpacity, LayoutAnimation, NativeModules, TouchableHighlight, Text, Image, View, StyleSheet, ImageBackground, useWindowDimensions, ScrollView, Modal, Pressable, FlatList} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Slider, RangeSlider } from '@react-native-assets/slider';

const isolamento = require("../../src/img/isolamento.jpg") 
const poucosAmigos = require("../../src/img/poucosAmigos.jpg") 
const vergonhaPublico = require("../../src/img/vergonhaPublico.jpg") 
const cansadoDeFalar = require("../../src/img/cansadoDeFalar.jpg") 
const prefereMensagem = require("../../src/img/prefereMensagem.jpg") 

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
    
    const {width} = useWindowDimensions()


    const Item = ({item}) => (
        <>
            <View style={style.item, {width}}>
                <Image
                    style= {style.img}
                    source= {item.image}
                    resizeMode='contain'
                    >
                </Image>
            </View>
            
        </>
    )


    return (
    <>
        <View style={style.centeredView}>
            <View style = {style.listView}>
                <FlatList
                    data={jsonList}
                    renderItem={({item}) => <Item item={item}/>}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator
                    pagingEnabled
                    bounces={false}
                />
            </View>
        </View>
    </>
    )
}

const style = StyleSheet.create({
    centeredView: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(158, 166, 234, 0.966)',
       
      },
      listView: {
        height: '50%',

      },
      img: {
        width: '100%',
        height: '100%',  
      },
      item:{
        backgroundColor: '#f9c2ff',
        padding: 55,
        marginVertical: 10,
        marginHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
})


/*
<View style={style.jsonList}>
            <FlatList
                data={jsonList}
                renderItem={({item}) => <Item title={item}/>}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator
                pagingEnabled
                bounces={false}
            />
        </View>

*/