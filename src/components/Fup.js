import React, {useState} from "react";
import { LinearGradient } from 'expo-linear-gradient'
import {TouchableOpacity, LayoutAnimation, NativeModules, TouchableHighlight, Text, Image, View, StyleSheet, ImageBackground, useWindowDimensions, ScrollView, Modal, Pressable, FlatList} from 'react-native'

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);

const timido = require("../../src/img/timido.jpg") 
const lupaIlustra = require("../../src/img/lupaIlustra.jpg") 


export default class App extends React.Component {
    
    state = {
        views: Array(5).fill({ w: '20%', h: '70%' }),
      };

      _onPress = (index) => {
        
        
        this.setState((prevState) => {
            const updatedViews = [...prevState.views];
            const view = { ...updatedViews[index] }; // Cria uma cópia do objeto view
        
            if (view.w === '20%') {
              LayoutAnimation.spring();
              view.w = '80%';
            } else {
              LayoutAnimation.spring();
              view.w = '20%';
            }
        
            updatedViews[index] = view; // Atualiza a cópia no array
        
            return { views: updatedViews };
          });
        
      };
      

    sendText = (index) => {

        let txtFinal = ''

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

        if (index === 0) {
            txtFinal = firstText
        } else if (index === 2) {
            txtFinal = secText
        } else if (index === 3) {
            txtFinal = terText
        } else if (index === 4){
            txtFinal = forText
        } else {
            txtFinal = fivText
        }

        return  (
            txtFinal    
        )
    } 
    
    render() {
        return(
            <>
            <View style={style.container}>
            <LinearGradient
                colors={['rgba(25,0,255,0.15449929971988796)', 'rgba(248,247,255,0)','rgba(251,251,251,0.9136029411764706)']}
                style={style.background}


            />
                <View style= {style.ballonsTxt}>
                    <View style={style.containerOptions}>
                    {this.state.views.map((view, index) => (
                        <View key={index} style={style.boxOptions}>
                        <View style={[style.box, { width: view.w, height: view.h }]}>
                            {view.w === '20%' ? null : this.sendText(index)}
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
       
                <View style= {style.imgCover}>
                    <Image
                        style= {style.img}
                        source= {lupaIlustra}
                        resizeMode='cover'
                        />
                </View>

            </View>
            
            </>
        )
    }
}


const style = StyleSheet.create({

    container: {
        flex: 1,
        //height: '100%',
        justifyContent: 'space-around',
        backgroundColor: '#bc90f5',
        alignItems: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    }, 
    ballonsTxt: {
        height: '60%',
        width: '100%',
        borderColor: 'red',
        borderWidth: 2,
    },  
    imgCover: {
        height: '40%',
        width: '100%',
        levitation: 4,
        //borderColor: 'red',
        //borderWidth: 2,
    },

    img: {
        width: '100%',
        height: '100%', 
      },

      txtG: {
        //fontFamily: 'aria-busy', 
        paddingLeft: '2%',
        fontSize: 20,
        //fontWeight: 100,
        fontStyle: 'normal',
    },
    containerOptions: {
        width: '100%', 
        height: '80%',
        //borderColor: 'red',
        //borderWidth: 2,
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
        paddingLeft: '7%',
        paddingTop: '5%',
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
