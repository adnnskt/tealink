import React, {useState} from "react";
import { Text, Image, View, StyleSheet,  useWindowDimensions, FlatList} from 'react-native'
//import { LinearGradient } from 'expo-linear-gradient'
//import { Slider, RangeSlider } from '@react-native-assets/slider';


export default props => {



    return(
    <>
       <View style = {style.container}>
            <View >
                <Text> Terapia Comportamental Aplicada (ABA) </Text>
            </View>
       
       </View>         
    
    </>
    )
}


const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f5cee7',
    },

})