import React, {useState} from "react";
import { Text, Image, View, StyleSheet,  useWindowDimensions, FlatList} from 'react-native'
//import { LinearGradient } from 'expo-linear-gradient'
//import { Slider, RangeSlider } from '@react-native-assets/slider';

const isolamento = require("../../src/img/isolamento.jpg") 
const poucosAmigos = require("../../src/img/poucosAmigos.jpg") 
const vergonhaPublico = require("../../src/img/vergonhaPublico.jpg") 
const cansadoDeFalar = require("../../src/img/cansadoDeFalar.jpg") 
const prefereMensagem = require("../../src/img/prefereMensagem.jpg") 


export default props => {

    let jsonList =  [
        {
            id: '1',
            image: isolamento,
            txt: 'Isolamento',
            longTxt: "Ao cuidar de alguém dentro do espectro autista com problemas de isolamento, é fundamental estabelecer uma rotina consistente e previsível, proporcionando um ambiente seguro que reduza a ansiedade. \n\nRespeitar os limites individuais, oferecer atividades que correspondam aos interesses da pessoa e explorar formas alternativas de comunicação são abordagens essenciais para promover a interação social e o bem-estar da pessoa autista."
        },
        {
            id: '2',
            image: poucosAmigos,
            txt: 'Poucos amigos',
            longTxt: "Uma dica essencial ao cuidar de alguém no espectro autista com poucos amigos é incentivar a participação em atividades que facilitem a formação de novas amizades, como grupos relacionados aos seus interesses. \n\nApoiar a prática de habilidades sociais, através de jogos de role-playing ou atividades estruturadas, é fundamental para aumentar a confiança e a habilidade da pessoa em interagir com os outros, promovendo assim um maior envolvimento social e a possibilidade de estabelecer novas conexões."
        },
        {
            id: '3',
            image: vergonhaPublico,
            txt: 'Vergonha em público',
            longTxt: "Uma dica importante ao cuidar de alguém no espectro autista que enfrenta vergonha em público é construir gradualmente a confiança e a autoestima da pessoa, proporcionando um ambiente de apoio e aceitação incondicional. Isso pode ser feito elogiando e reconhecendo suas realizações, mesmo as pequenas, e enfatizando suas qualidades positivas. \n\nAlém disso, é útil praticar técnicas de relaxamento e estratégias para lidar com a ansiedade em situações sociais, como a respiração profunda ou a visualização positiva, para ajudar a pessoa a se sentir mais segura e confortável ao enfrentar desafios sociais."
        },
        {
            id: '4',
            image: cansadoDeFalar,
            txt: 'Cansaço ao falar',
            longTxt: "Uma dica valiosa para lidar com a característica de cansaço ao falar em alguém no espectro autista é estabelecer um sistema de comunicação alternativo que permita à pessoa se expressar de forma mais eficiente e menos cansativa. Isso pode incluir o uso de dispositivos de comunicação assistiva, como tablets com aplicativos de comunicação, ou até mesmo o uso de cartões de comunicação visual para facilitar a expressão de necessidades, desejos e sentimentos. \n\nAlém disso, é importante respeitar os limites da pessoa e oferecer oportunidades para descanso e recarga de energia durante as interações sociais, permitindo pausas quando necessário e garantindo que a comunicação seja feita em um ritmo confortável para ela."
        },
        {
            id: '5',
            image: prefereMensagem,
            txt: 'Prefere mensagem',
            longTxt: "Uma dica relevante para lidar com a preferência de alguém no espectro autista por se comunicar por mensagem é oferecer múltiplas opções de comunicação, incluindo mensagens de texto, e-mails ou aplicativos de mensagens instantâneas. Isso permite que a pessoa escolha a forma de comunicação que se sinta mais confortável e capaz de expressar seus pensamentos e sentimentos de maneira clara e eficaz. \n\nAlém disso, é importante respeitar essa preferência e não pressionar a pessoa a se comunicar de outra forma, reconhecendo e valorizando sua maneira única de se relacionar e interagir com os outros."
        },
    ]
    
    /*
    
    
    */


    const {width} = useWindowDimensions()


    const Item = ({item}) => (
        <>
            <View style={[style.item, {width}]}>
                <Text style={style.txtTitle}>{item.txt}</Text>
                    <Image
                        style= {style.img}
                        source= {item.image}
                        resizeMode='contain'
                        >
                    </Image>
                <View style={style.txtBox}>
                    <Text>{item.longTxt}</Text> 
                </View>    
            </View> 
        </>
    )

    return (
    <>
        <View style={style.centeredView}>
           <View style = {style.listView}>
                <FlatList
                    data={jsonList}
                    renderItem={({item}) => <Item item={item}/>}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator
                    pagingEnabled
                    bounces={false}
                />
            </View>
        </View>
    </>
    )
}

const style = StyleSheet.create({
    centeredView: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(158, 166, 234, 0.966)',
       
      },
      listView: {
        //height: '50%',

      },
      txtTitle: {
        fontSize: 40,

      },
      img: {
        width: '100%',
        height: '52%',  
      },
      txtBox: {
        width: '95%',
        backgroundColor: '#f6e3f8',
        padding: '2%',
        height: '39%',
        borderRadius: 20,
        elevation: 5,

      },
      longTxt: {
        paddingLeft: '2%',
      },
      titleList: {
        paddingLeft: '2%',
        fontSize: 35,
        fontWeight: 100,
      },
      item:{
        backgroundColor: '#f9c2ff',
        marginVertical: 10,
        //marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
})
