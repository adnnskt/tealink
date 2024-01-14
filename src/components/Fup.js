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
        w: 100,
        h: 100,
      };
    
      _onPress = () => {
        // Animate the update
        LayoutAnimation.spring();
        this.setState({w: this.state.w + 15, h: this.state.h + 15});
      };
    
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
                        style={[style.box, {width: this.state.w, height: this.state.h}]}
                        />
                        <TouchableOpacity onPress={this._onPress}>
                        <View style={style.button}>
                            <Text style={style.buttonText}>Press me!</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            {/* ver https://reactnative.dev/docs/animations#layoutanimation-api*/}
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

    //Text animation 
    box: {
        width: 200,
        height: 200,
        backgroundColor: 'red',
      },
      button: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 15,
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      },

})