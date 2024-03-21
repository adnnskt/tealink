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
            longTxt: "Ao cuidar de alguém dentro do espectro autista com problemas de isolamento, é fundamental estabelecer uma rotina consistente e previsível, proporcionando um ambiente seguro que reduza a ansiedade. Respeitar os limites individuais, oferecer atividades que correspondam aos interesses da pessoa e explorar formas alternativas de comunicação são abordagens essenciais para promover a interação social e o bem-estar da pessoa autista."
        },
        {
            id: '2',
            image: poucosAmigos,
            txt: 'Poucos amigos',
            longTxt: "Uma dica essencial ao cuidar de alguém no espectro autista com poucos amigos é incentivar a participação em atividades que facilitem a formação de novas amizades, como grupos relacionados aos seus interesses. Apoiar a prática de habilidades sociais, através de jogos de role-playing ou atividades estruturadas, é fundamental para aumentar a confiança e a habilidade da pessoa em interagir com os outros, promovendo assim um maior envolvimento social e a possibilidade de estabelecer novas conexões."
        },
        {
            id: '3',
            image: vergonhaPublico,
            txt: 'Vergonha em público',
            longTxt: ""
        },
        {
            id: '4',
            image: cansadoDeFalar,
            txt: 'Cansaço ao falar',
            longTxt: ""
        },
        {
            id: '5',
            image: prefereMensagem,
            txt: 'Prefere mensagem',
            longTxt: ""
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
        height: '60%',  
      },
      txtBox: {
        width: '95%',
        backgroundColor: '#f6e3f8',
        padding: '2%',
        height: '28%',
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
