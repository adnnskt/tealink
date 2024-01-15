import React, {useState} from "react";
import {TouchableOpacity, LayoutAnimation, NativeModules, TouchableHighlight, Text, Image, View, StyleSheet, ImageBackground, useWindowDimensions, ScrollView, Modal, Pressable, FlatList} from 'react-native'
import Card from './Card'
import { LinearGradient } from 'expo-linear-gradient'
import { Slider, RangeSlider } from '@react-native-assets/slider';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    

export default class App extends React.Component {

      state = {
        w: '20%',
        h: '40%',
      };
    
      _onPress = () => {
        // Animate the update
        LayoutAnimation.spring();
        this.setState({w: this.state.w = '80%'/*, h: this.state.h + 0*/});
      };
    
    render() {
        return (
        <>
            <View style= {style.container}>
                <Text style = {style.txtG}>
                    Abaixo algumas ideias que podem ser úteis para auxiliar com o hiperfoco.
                </Text>
                <View style= {style.containerOptions}>
                    <View style= {style.boxOptions}>
                        <View style={[style.box, {width: this.state.w, height: this.state.h}]} />   
                        <TouchableOpacity onPress={this._onPress} style= {style.touchButton}>
                            <View style={style.button}>
                                <Text style={style.buttonText}>Press me!</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
        );
    }
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
    containerOptions: {
        width: '100%', 
        height: '30%',
        borderColor: 'red',
        borderWidth: 2,
    },
    boxOptions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        paddingLeft: '2%',
    },


    //Text animation 
    box: {
        backgroundColor: 'red',
        paddingRight: '2%',
        borderRadius: 50,
      },
      touchButton: {
        width: '35%',
        //height: '85%',
        paddingLeft: '2%',
      },
      button: {
        backgroundColor: 'black',
        //width: '100%',
        //paddingHorizontal: 20,
        //paddingVertical: 15,
        //marginTop: 15,

      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      },

})