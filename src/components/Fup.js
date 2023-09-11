import React from "react";
//import { NativeBaseProvider, Text, Box, Center } from "native-base";
import {TouchableHighlight, Text, Image, View, StyleSheet, ImageBackground, ScrollView} from 'react-native'
import Card from './Card'
import { LinearGradient } from 'expo-linear-gradient'

export default props => {

    return (  
    <>
        <View style= {style.container}>
        <LinearGradient
        // Background Linear Gradient
        colors={['rgba(158, 166, 234, 0.966)', 'transparent']}
        style={style.background}
        />
            <View style= {style.overCard}>
                <View style= {style.card}>
                    <Text style= {style.textMid}>
                        O que é?
                    </Text>
                    <ScrollView>
                        <Text style= {style.longTxt}>
                        Uma crise em pessoas dentro do espectro do autismo é uma reação intensa a estímulos 
                        ou situações desafiadoras. Pode ocorrer devido a dificuldades sensoriais, emocionais 
                        ou cognitivas que são mais pronunciadas em pessoas com autismo.
                        
                        </Text> 
                        <Text style= {style.longTxt}>
                        Durante uma crise, a pessoa pode apresentar comportamentos como agitação, agressividade ou choro. 
                        É importante entender que essas crises não são birras, mas sim respostas a desafios 
                        enfrentados na percepção e processamento de informações do ambiente. 
                        
                        </Text>
                        <Text style= {style.longTxt}>
                        Oferecer um ambiente calmo, apoio emocional e compreensão das necessidades individuais 
                        pode ajudar a pessoa a lidar com a crise de forma mais tranquila.
                        </Text>
                    </ScrollView>
                </View>
            </View>
            <View style={style.overFreq}>
                <View style= {style.freq}>
                    <View style= {style.circleFreq}>
                    </View>
                    <View style= {style.freqElement}>
                        <Text style= {style.txtElement}>Frequencia</Text>
                        <View style= {style.freqElementOptionsContainer}>
                            <View style= {style.freqElementOptions}>

                            </View>
                        </View>
                    </View>
                </View>   
            </View>
            <View style={style.overFreq}>
                <View style= {style.freq}>
                    <View style= {style.circleFreq}>
                    </View>
                    <View style= {style.freqElementBig}>
                    </View>
                </View>   
            </View>
        </View>
    </>  
    )
}
      
const style = StyleSheet.create({
   
    container: {
        height: '100%',
        backgroundColor: '#e4e9fb',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '80%',
    }, 
    backgroundTitle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '80%',
    },
     overCard: {
        height: '35%',
        width: '90%',
        backgroundColor: '#9090d0',
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        elevation: 5,
    },
    card: {

    },
    textMid: {
        paddingTop: '5%',
        paddingLeft: '5%',
        fontSize: 20,
        color: '#e4e9fb',
        borderBottomWidth: 1,
        borderColor: 'white',
    },
    longTxt: {
        fontSize: 10,

    },
    overFreq:{
        height: '20%',
        width: '90%',
        paddingLeft: '5%',
        //backgroundColor: 'grey',
    },
    freq: {
        height: '100%',
        width: '100%',
        borderColor: 'black',
        borderLeftWidth: 1,
        //paddingLeft: '3%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    circleFreq: {
        height: '15%',
        width: '5%',
        borderRadius: 50,
        backgroundColor: '#3a3e75',
    },
    freqElement: {
        height: '50%',
        width: '90%',
        backgroundColor: '#9090d0',
        borderRadius: 40,
        elevation: 5,
    },
    txtElement: {
        paddingLeft: '10%',
        color: '#e4e9fb',
    },
    freqElementOptionsContainer:{
        width: '100%',
        height: '50%',
        backgroundColor: 'blue',
    },
    freqElementOptions: {
        width: '20%',
        height: '90%',
        borderRadius: 40,
        backgroundColor: 'red',
    },
    freqElementBig: {
        height: '90%',
        width: '90%',
        backgroundColor: '#9090d0',
        borderRadius: 20,
        elevation: 5,
    },
    overAdd:{
        height: '8%',
        width: '80%',
        backgroundColor: '#d4d6d6',
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
    },
    add:{
        justifyContent: 'center',
        height: '100%',
    },
    textAdd:{
        paddingLeft: '5%',
        fontSize: 20,
        color: 'grey',
    }
})

/*

    <>
        <View style= {style.container}>
        <LinearGradient
        // Background Linear Gradient
        colors={['rgba(158, 166, 234, 0.966)', 'transparent']}
        style={style.background}
        />
            <View style= {style.overTitle}>
                <View style= {style.title}>
                    <Text style= {style.textTitle}>
                        Crise
                    </Text>
                </View>
            </View>
            <View style= {style.overCard}>
                <View style= {style.card}>
                    <Text style= {style.textMid}>
                        O que é?
                    </Text>
                </View>
            </View>
            <View style= {style.overAdd}>
                <View style= {style.add}>
                    <Text style= {style.textAdd}>
                        Adicionar frequência
                    </Text>
                </View>
            </View>
        </View>
    </> 

    
*/ 