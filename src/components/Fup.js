import React, {useState} from "react";
import {TouchableHighlight, Text, Image, View, StyleSheet, ImageBackground, ScrollView} from 'react-native'
import Card from './Card'
import { LinearGradient } from 'expo-linear-gradient'

export default props => {

    const [pressBaixo, setPressBaixo] = useState(style.freqElementOptions)
    const [pressMedio, setPressMedio] = useState(style.freqElementOptions)
    const [pressAlto, setPressAlto] = useState(style.freqElementOptions)
    
    const [option1, setOption1] = useState(style.triggerOption)
    const [option2, setOption2] = useState(style.triggerOption)
    const [option3, setOption3] = useState(style.triggerOption)
    const [option4, setOption4] = useState(style.triggerOption)
    const [option5, setOption5] = useState(style.triggerOption)
    const [option6, setOption6] = useState(style.triggerOption)
    

    //const [password, setPassword] = useState('')

    const onPressBaixo= () => setPress(style.freqElementOptionsPress)
    const onPressMedio= () => setPress(style.freqElementOptionsPress)
    const onPressAlto= () => setPress(style.freqElementOptionsPress)


    function onPress (type) {
        if (type === 'baixo' )  {
            setPressBaixo(style.freqElementOptionsPress)
            setPressMedio(style.freqElementOptions)
            setPressAlto(style.freqElementOptions)

        }else if (type === 'medio') {
            setPressMedio(style.freqElementOptionsPress)
            setPressBaixo(style.freqElementOptions)
            setPressAlto(style.freqElementOptions)

        }else {
            setPressAlto(style.freqElementOptionsPress)
            setPressBaixo(style.freqElementOptions)
            setPressMedio(style.freqElementOptions)

        }


    }


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
                        <Text style= {style.txtElement}>Frequência</Text>
                        <View style= {style.freqElementOptionsContainer}>
                            <TouchableHighlight onPress={() => onPress('baixo')} style= {style.touchPress}>
                                <View style= {pressBaixo}>
                                    <Text style= {style.txtElement}>Baixo</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => onPress('medio')} style= {style.touchPress}>
                                <View style= {pressMedio}>
                                    <Text style= {style.txtElement}>Médio</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => onPress('alto')} style= {style.touchPress}>
                                <View style= {pressAlto}>
                                    <Text style= {style.txtElement}>Alto</Text>
                                </View>
                            </TouchableHighlight>
                            
                        </View>
                    </View>
                </View>   
            </View>
            <View style={style.overFreq}>
                <View style= {style.freq}>
                    <View style= {style.circleFreq}>
                    </View>
                    <View style= {style.freqElementBig}>
                    <View style= {style.freqElementTrigger}>
                        <Text style= {style.txtElement}>Gatilhos</Text>
                        <View style= {style.freqElementTriggerContainer}>
                            <TouchableHighlight onPress={() => option1 === style.triggerOption ? setOption1(style.triggerOptionPress) : setOption1(style.triggerOption)} style= {style.touchPress}>
                                <View style= {option1}>
                                    <Text style= {style.txtTrigger}>Sensorial</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => option2 === style.triggerOption ? setOption2(style.triggerOptionPress) : setOption2(style.triggerOption)} style= {style.touchPress}>
                                <View style= {option2}>
                                    <Text style= {style.txtTrigger}>Luz</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => option3 === style.triggerOption ? setOption3(style.triggerOptionPress) : setOption3(style.triggerOption)} style= {style.touchPress}>
                                <View style= {option3}>
                                    <Text style= {style.txtTrigger}>Som</Text>
                                </View>
                            </TouchableHighlight>
                            
                        </View>
                        <View style= {style.freqElementTriggerContainer}>
                            <TouchableHighlight onPress={() => option4 === style.triggerOption ? setOption4(style.triggerOptionPress) : setOption4(style.triggerOption)} style= {style.touchPress}>
                                <View style= {option4}>
                                    <Text style= {style.txtTrigger}>Social</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => option5 === style.triggerOption ? setOption5(style.triggerOptionPress) : setOption5(style.triggerOption) } style= {style.touchPress}>
                                <View style= {option5}>
                                    <Text style= {style.txtTrigger}>Comunicação</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => option6 === style.triggerOption ? setOption6(style.triggerOptionPress) : setOption6(style.triggerOption)} style= {style.touchPress}>
                                <View style= {option6}>
                                    <Text style= {style.txtTrigger}>Alto</Text>
                                </View>
                            </TouchableHighlight>
                            
                        </View>
                    </View>
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
        width: '95%',
        height: '60%',
        //backgroundColor: 'blue',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: '20%',
    },
    touchPress: {
        width: '30%',
        height: '80%',
        borderRadius: 40,
        //backgroundColor: '#4a5989',
        //elevation: 5,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    freqElementOptions: {
        width: '100%',
        height: '100%',
        borderRadius: 40,
        backgroundColor: '#4a5989',
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    freqElementOptionsPress: {
        width: '100%',
        height: '100%',
        borderRadius: 40,
        backgroundColor: '#282640',
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtOptions: {
        color: '#e4e9fb',
    },
    freqElementBig: {
        height: '90%',
        width: '90%',
        backgroundColor: '#9090d0',
        borderRadius: 20,
        elevation: 5,
    },
    freqElementTrigger: {
        height: '100%',
        width: '100%',
        backgroundColor: '#9090d0',
        borderRadius: 20,
        //elevation: 5,
    },
    freqElementTriggerContainer:{
        width: '95%',
        height: '50%',
        //backgroundColor: 'blue',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: '5%',
    },
    triggerOption: {
        width: '100%',
        height: '50%',
        borderRadius: 40,
        backgroundColor: '#4a5989',
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    triggerOptionPress: {
        width: '100%',
        height: '50%',
        borderRadius: 40,
        backgroundColor: '#282640',
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    txtTrigger:{
        //paddingLeft: '10%',
        color: '#e4e9fb',
        fontSize: 12,
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