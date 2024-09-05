import React,  { useCallback }   from "react";
import {Platform, UIManager, LayoutAnimation, Text, Image, View, StyleSheet, ScrollView} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'; // Importa o useFocusEffect para animações ao focar na tela
const doctor = require("../../src/img/doctor.png") 


export default props => {



return (
    <>
        <View style={style.container}>
            
        </View>
    </>
  )
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f5cee7',
        justifyContent: 'space-around',
    }
})