import React, {useState} from "react";
import {TouchableOpacity, LayoutAnimation, NativeModules, TouchableHighlight, Text, Image, View, StyleSheet, ImageBackground, useWindowDimensions, ScrollView, Modal, Pressable, FlatList} from 'react-native'
import Card from './Card'
import { LinearGradient } from 'expo-linear-gradient'
import { Slider, RangeSlider } from '@react-native-assets/slider';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    

export default class App extends React.Component {

    /*
      state = {
        w: '20%',
        h: '70%',
      };
    
      _onPress = () => {

        // Animate the update

            if(this.state.w === '20%'){
            LayoutAnimation.spring();
            this.setState({w: this.state.w = '80%'/*, h: this.state.h + 0});
        } else {
            LayoutAnimation.spring();
            this.setState({w: this.state.w = '20%'/*, h: this.state.h + 0});
        }
    };
    */

    state = {
        views: Array(5).fill({ w: '20%', h: '70%' }),
      };

      _onPress = (index) => {
        this.setState((prevState) => {
          const updatedViews = [...prevState.views];
          const view = updatedViews[index];
            
          if (updatedViews[index].w === '20%') {
            LayoutAnimation.spring();
            updatedViews[index].w = '80%';
          } else {
            LayoutAnimation.spring();
            updatedViews[index].w = '20%';
          }
          console.warn(updatedViews)
          //console.warn(updatedViews[0])
          return { views: updatedViews };
        });
      };
      

    sendText = () => {

        let firstText = <Text style= {style.txtInBox}>
            <Text style= {style.txtBold}>Variedade de Interesses:</Text> As áreas de hiperfoco podem variar amplamente entre indivíduos. 
            Pode ser desde tópicos acadêmicos específicos até hobbies, atividades motoras ou objetos específicos.
            </Text>

        let secText = <Text style= {style.txtInBox}>
            <Text style= {style.txtBold}>Fonte de Conforto:</Text> O hiperfoco muitas vezes funciona como uma fonte de conforto e estabilidade emocional para a pessoa. 
            É um modo pelo qual eles se conectam profundamente com o mundo ao seu redor.        
            </Text>

        let terText = <Text style= {style.txtInBox}>
            <Text style= {style.txtBold}>Dificuldade na Interrupção:</Text> Durante o hiperfoco, pode ser desafiador para a pessoa mudar de foco e se envolver em outras atividades. 
                Interrupções abruptas podem causar desconforto.        
            </Text>

        let forText = <Text style= {style.txtInBox}>
            <Text style= {style.txtBold}>Expressão de Identidade:</Text> Os interesses hiperfocados frequentemente desempenham um papel importante na formação da identidade da pessoa. 
                Eles podem ser uma fonte significativa de autoexpressão.        
            </Text>

        let fivText = <Text style= {style.txtInBox}>
            <Text style= {style.txtBold}>Impacto na Rotina:</Text> O hiperfoco pode influenciar a rotina diária da pessoa. 
                É importante encontrar um equilíbrio entre permitir o hiperfoco e garantir que outras responsabilidades e atividades sejam cumpridas.        
            </Text>

        let sixText = <Text style= {style.txtInBox}>
            <Text style= {style.txtBold}>Potencial para Desenvolvimento:</Text> O hiperfoco também pode ser encorajado e canalizado positivamente. 
                Identificar maneiras de incorporar os interesses hiperfocados em atividades construtivas pode ser benéfico.
            </Text>

        return  (
            sixText    
        )
    } 
    
    render() {
        return (
        <>
            <View style={style.container}>
                <Text style={style.txtG}>
                Abaixo algumas ideias que podem ser úteis para auxiliar com o hiperfoco.
                </Text>
                <View style={style.containerOptions}>
                {this.state.views.map((view, index) => (
                    <View key={index} style={style.boxOptions}>
                    <View style={[style.box, { width: view.w, height: view.h }]}>
                        {view.w === '20%' ? null : this.sendText()}
                    </View>
                    <TouchableOpacity
                        onPress={() => this._onPress(index)}
                        style={style.touchButton}
                    >
                        <View style={style.button}>
                        <Text style={style.buttonText}>⬌</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                ))}
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
        height: '80%',
        borderColor: 'red',
        borderWidth: 2,
    },
    boxOptions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '20%',
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



/*

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


*/