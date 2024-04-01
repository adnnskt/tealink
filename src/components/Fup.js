import React, {useState} from "react";
import { Text, Image, View, StyleSheet,  useWindowDimensions, FlatList, Modal} from 'react-native'
//import { LinearGradient } from 'expo-linear-gradient'
//import { Slider, RangeSlider } from '@react-native-assets/slider';


export default props => {



    return(
    <>
       <View style = {style.container}>
            <View style = {style.listItem}>
                <Text> Terapia Comportamental Aplicada (ABA) </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Terapia Ocupacional (TO): </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Terapia da Fala e Linguagem </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Intervenção Precoce </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Terapia Sensorial </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Terapia Social Pragmática </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Intervenção Comportamental Early Start Denver (ESDM) </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Terapia de Desenvolvimento Relacional (RDI) </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Terapia de Integração Sensorial </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Musicoterapia </Text>
            </View>
        

       </View>         
    
    </>
    )
}


const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f5cee7',
        justifyContent: 'space-around',
    },

    listItem: {
        height: '5%',
        width: '95%',
        backgroundColor: '#eabefa',
        borderRadius: 50,
        elevation: 5,
    }

})