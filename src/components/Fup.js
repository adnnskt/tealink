import React, {useState} from "react";
import {TouchableHighlight, Text, Image, View, StyleSheet, ImageBackground, useWindowDimensions, ScrollView, Modal, Pressable, FlatList} from 'react-native'
import Card from './Card'
import { LinearGradient } from 'expo-linear-gradient'
import { Slider, RangeSlider } from '@react-native-assets/slider';
const bgsensorial = require("../../src/img/sensorial.png") 

import jsonList from "../views/criseContentJson"

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
    const [noChoice, setNoChoice] = useState(style.btnNoChoice)

    const [value, setValue] = React.useState(0);
    const [range, setRange] = React.useState([0, 0]);
    const [max, setMax] = React.useState(1);

    const [txtValue, setTxtValue] = React.useState('Baixo')

    const [modalVisible, setModalVisible] = useState(false);

    const {width} = useWindowDimensions()

    const Item = ({title}) => (
        
        <>    
            <View style={style.item, {width}}>
                <Image
                    style= {style.img}
                    source= {title.image}
                    resizeMode='contain'
                    >
                </Image>
                <View style={style.groupButtonsModal}>
                    <View style={style.subGroupsBtn}>
                        <Pressable
                            style={[style.button, style.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={style.textStyle}>  Fechar  </Text>
                        </Pressable>
                        <View style={style.groupPoint}>
                            <View style={title.id === '1' ? style.pointerMain : style.pointer}/>
                            <View style={title.id === '2' ? style.pointerMain : style.pointer}/>
                            <View style={title.id === '3' ? style.pointerMain : style.pointer}/>
                            <View style={title.id === '4' ? style.pointerMain : style.pointer}/>
                        </View>
                    </View>
                </View>
            </View>
        </>
        //
      )

    function txtValueChange(value) {

        setValue(value)

        if (value <= 30 ) {
            setTxtValue('Baixo')
        } else if (value > 30 && value < 80){
            setTxtValue('Médio')
        } else {
            setTxtValue('Alto')
        }

    }

    let options = {
        sensorial: option1 === style.triggerOption ? false : true,
        rotina: option2 === style.triggerOption ? false : true,
        fobia: option3 === style.triggerOption ? false : true,
        social: option4 === style.triggerOption ? false : true,
        comunicação: option5 === style.triggerOption ? false : true,
        emocional: option6 === style.triggerOption ? false : true,        
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
                        <View style= {style.answerFreq}>
                            <Text style= {style.txtElement}>Frequência:</Text>
                            <Text style= {style.txtElement}>{txtValue}</Text>
                        </View>
                        <View style= {style.freqElementOptionsContainer}>
                            <Slider
                                style={style.slider}
                                minimumValue={0}
                                maximumValue={100}
                                value={value}
                                step={10}
                                onValueChange={txtValueChange}
                                minimumTrackTintColor="#282640"
                                maximumTrackTintColor="#4a5989"
                            />                    
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
                                    <Text style= {style.txtTrigger}>Rotina</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => option3 === style.triggerOption ? setOption3(style.triggerOptionPress) : setOption3(style.triggerOption)} style= {style.touchPress}>
                                <View style= {option3}>
                                    <Text style= {style.txtTrigger}>Fobia</Text>
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
                                    <Text style= {style.txtTrigger}>Emocional</Text>
                                </View>
                            </TouchableHighlight>
                            
                        </View>
                    </View>
                    </View>
                </View>   
            </View>
            <View style={style.btnNoChoiceOver}>
                <TouchableHighlight onPress={()=> noChoice === style.btnNoChoice ? setNoChoice(style.btnNoChoicePress) : setNoChoice(style.btnNoChoice) } style={style.btnNoChoiceTouch}>
                <View style= {noChoice}>
                    <Text style={style.txtNoChoice}>Não identifico gatilhos</Text>
                </View>
                </TouchableHighlight>
            </View>
            <View style={style.addItems}>
                <TouchableHighlight onPress={() => setModalVisible(true)} style={style.addItemsButtonTouch}>
                    <View style={style.addItemsButton}>
                        <Text style={style.txtButton}>Consultar</Text>
                    </View>
                </TouchableHighlight>
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
                }}>
                <View style={style.centeredView}>
                    <FlatList
                        data={jsonList}
                        renderItem={({item}) => <Item title={item} />}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator
                        pagingEnabled
                        bounces={false}
                    />
                </View>
            </Modal>
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
        paddingLeft: '2%',

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
    answerFreq: {
        //borderWidth: 2,
        //borderColor: 'red',
        paddingLeft: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',

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
        paddingLeft: '10%',
    },
    slider: {
        width: '100%',
        height: '90%',
        flexGrow: 0,
        //borderWidth: 1,
        //borderColor: "black",
        //borderStyle: "solid"
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
        height: '40%',
        //backgroundColor: 'blue',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: '5%',
        //borderWidth: 2,
        //borderColor: 'red',
    },
    triggerOption: {
        width: '100%',
        height: '100%',
        borderRadius: 40,
        backgroundColor: '#4a5989',
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    triggerOptionPress: {
        width: '100%',
        height: '100%',
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
    btnNoChoiceOver:{
        height: '7%',
        width: '40%',
        //borderWidth: 2,
        //borderColor: 'red',
        paddingLeft: '5%',
        paddingTop: '3%',
    },
    btnNoChoiceTouch:{
        height: '100%',
        width: '100%',
        borderRadius: 40,
    },
    btnNoChoice:{
        height: '100%',
        width: '100%',
        borderRadius: 40,
        backgroundColor:'#4a5989',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        //borderWidth: 2,
        //borderColor: 'red',
    },
    btnNoChoicePress:{
        height: '100%',
        width: '100%',
        borderRadius: 40,
        backgroundColor:'#282640',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    txtNoChoice:{
        color: '#e4e9fb',
        fontSize: 12,
    },
    overAdd:{
        height: '30%',
        width: '80%',
        backgroundColor: '#d4d6d6',
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
    },
    add:{
        justifyContent: 'center',
        height: '40%',
    },
    addItems:{
        height: '25%',
        width: '100%',
        //borderWidth: 2,
        //borderColor: 'red',
        paddingTop: '10%',
        alignItems: 'center',
    },
    addItemsButton:{  
        height: '100%',          
        width: '100%',
        //borderWidth: 2,
        //borderColor: 'blue',
        borderRadius: 60,
        backgroundColor: '#9090d0',
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtButton:{
        color: '#e4e9fb',
        fontSize: 20,
    },
    addItemsButtonTouch: {
        height: '40%',          
        width: '98%',
        borderRadius: 60,
    },
    centeredView: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        //borderColor: 'red',
        //borderWidth: 2,
        //height: '68%',
        //marginTop: '15%',
        backgroundColor: 'rgba(158, 166, 234, 0.966)',
        //borderRadius: 20,
      },
      modalView: {
        //margin: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        height: '80%',
        width: '90%',
        borderColor: 'red',
        borderWidth: 2,        
        //padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        /*shadowOffset: {
          width: 0,
          height: 2,
        },*/
        //shadowOpacity: 0.25,
        //shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
        width: '95%',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      overImg:{
        flex: 1,
      },
      img: {
        width: '100%',
        height: '70%',  
        //justifyContent: 'center'
      },
      groupButtonsModal: {
        //flexDirection: 'row',
        width: '100%',
        height: '30%',
        //borderColor: 'red',
        //borderWidth: 2,
        justifyContent: 'space-between',
        justifyContent: 'center',
      },
      item:{
        backgroundColor: '#f9c2ff',
        padding: 55,
        //width:'100%',
        marginVertical: 10,
        marginHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
      pointer:{
        //backgroundColor: '#282640',
        backgroundColor: '#4a5989',
        borderRadius: 20,
        width: '5%',
        height: '13%',
      },

      pointerMain:{
        backgroundColor: '#282640',
        //backgroundColor: '#4a5989',
        borderRadius: 20,
        width: '5%',
        height: '13%',
      },
      
      subGroupsBtn:{
        width: '100%',
        alignItems: 'center',
        height: '30%',
        justifyContent: 'space-between',
      },
      groupPoint:{
        width: '40%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //borderColor: 'green',
        //borderWidth: 2,
        //paddingTop: '2%',
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