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
            longTxt: "ao lidar com alguém dentro do espectro autista que enfrenta problemas de isolamento é criar um ambiente seguro e previsível. A consistência e a rotina podem ser fundamentais para promover a sensação de segurança. Tente manter um cronograma regular para as atividades diárias, fornecendo previsibilidade e reduzindo a ansiedade relacionada a mudanças repentinas. Além disso, é essencial entender e respeitar os limites pessoais da pessoa autista. Isso inclui respeitar suas necessidades de espaço e tempo para recarregar as energias. Não force interações sociais, mas esteja presente e disponível para quando a pessoa estiver pronta para se envolver. Encontre atividades que a pessoa autista goste e que promovam a interação social de uma maneira confortável para ela. Isso pode incluir hobbies específicos, jogos ou atividades sensoriais. Procure criar oportunidades para a conexão social de uma forma que respeite as preferências e limitações individuais. Por fim, esteja aberto à comunicação não verbal e desenvolva formas alternativas de se comunicar, como o uso de pictogramas, linguagem de sinais ou tecnologias assistivas, para facilitar a expressão e compreensão das necessidades e sentimentos da pessoa autista."
        },
        {
            id: '2',
            image: poucosAmigos,
            txt: 'Poucos amigos',
            longTxt: ""
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
        enum:'100',

      },
      img: {
        width: '100%',
        height: '60%',  
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
