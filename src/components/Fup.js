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

            if(this.state.w === '20%'){
            LayoutAnimation.spring();
            this.setState({w: this.state.w = '80%'/*, h: this.state.h + 0*/});
        } else {
            LayoutAnimation.spring();
            this.setState({w: this.state.w = '20%'/*, h: this.state.h + 0*/});
        }
    };

    sendText = () => {
        return  (
            <Text style= {style.txtInBox}>
                <Text style= {style.txtBold}>Variedade de Interesses:</Text> As áreas de hiperfoco podem variar amplamente entre indivíduos. 
                Pode ser desde tópicos acadêmicos específicos até hobbies, atividades motoras ou objetos específicos.
            </Text>
        )
    } 
    
    render() {
        return (
        <>
            <View style= {style.container}>
                <Text style = {style.txtG}>
                    Abaixo algumas ideias que podem ser úteis para auxiliar com o hiperfoco.
                </Text>
                <View style= {style.containerOptions}>
                    <View style= {style.boxOptions}>
                        <View style={[style.box, {width: this.state.w, height: this.state.h}]}> 
                            {this.state.w === '20%' ? null : this.sendText()}
                        </View>   
                        <TouchableOpacity onPress={this._onPress} style= {style.touchButton}>
                            <View style={style.button}>
                                <Text style={style.buttonText}>⬌</Text>
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
        backgroundColor: '#133a9c',
        paddingRight: '2%',
        borderRadius: 50,
        elevation: 5,
      },

      txtInBox: {
        color: '#fff',
        fontSize: 10,
        paddingLeft: '5%',
        paddingTop: '2%',
      },

      txtBold:{
        color: '#fff',
        fontSize: 10,
        paddingLeft: '5%',
        paddingTop: '2%',
        fontWeight: 'bold',
      },

      touchButton: {
        width: '15%',
        paddingLeft: '2%',
      },
      button: {
        backgroundColor: '#0b205b',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '15%',
        elevation: 5,

      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
      },

})