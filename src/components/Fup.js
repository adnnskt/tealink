import React, {useState} from "react";
import {TouchableOpacity, LayoutAnimation, NativeModules, TouchableHighlight, Text, Image, View, StyleSheet, ImageBackground, useWindowDimensions, ScrollView, Modal, Pressable, FlatList} from 'react-native'
import Card from './Card'
import { LinearGradient } from 'expo-linear-gradient'
import { Slider, RangeSlider } from '@react-native-assets/slider';


export default props => {

    const {UIManager} = NativeModules;

    UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    
      state = {
        w: 100,
        h: 100,
      };
    
      _onPress = () => {
        // Animate the update
        LayoutAnimation.spring();
        this.setState({w: this.state.w + 15, h: this.state.h + 15});
      }
    
    render() {
        return (
        <>
            <View style= {style.container}>
                <Text style = {style.txtG}>
                    Abaixo algumas ideias que podem ser úteis para auxiliar com o hiperfoco.
                </Text>
                <View style= {style.containerOptions}>
                    <View>
                    <View
                        style={[styles.box, {width: this.state.w, height: this.state.h}]}
                        />
                        <TouchableOpacity onPress={this._onPress}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Press me!</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            {/* ver https://reactnative.dev/docs/animations#layoutanimation-api*/}
            </View>
        </>
        )
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
    }

})