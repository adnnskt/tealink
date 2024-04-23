import React, {useState} from "react";
import { Text, Image, View, StyleSheet,  Pressable, FlatList, Modal, TouchableHighlight} from 'react-native'
const aba = require("../../src/img/aba.jpg") 


export default props => {

    const [modalVisible, setModalVisible] = useState(false);

    const jsonList = [
        {
            id: '1',
            name: 'aba',
            txt:'Terapia ABA (Análise do Comportamento Aplicada) é uma abordagem terapêutica baseada em princípios científicos da psicologia comportamental. Ela busca modificar comportamentos significativos através da aplicação de técnicas de reforço positivo e estratégias de ensino individualizadas. É frequentemente utilizada no tratamento de distúrbios do espectro autista e outros transtornos do desenvolvimento, visando promover habilidades sociais, comunicativas e de autocuidado.',
            img: aba,
        },
        {
            id: '2',
            name: 'to',
            txt:'Terapia ABA (Análise do Comportamento Aplicada) é uma abordagem terapêutica baseada em princípios científicos da psicologia comportamental. Ela busca modificar comportamentos significativos através da aplicação de técnicas de reforço positivo e estratégias de ensino individualizadas. É frequentemente utilizada no tratamento de distúrbios do espectro autista e outros transtornos do desenvolvimento, visando promover habilidades sociais, comunicativas e de autocuidado.',
            img: aba,
        },
        
    ]




    const InterModal = (props) => {
        const {text, image} = props

        return(
        <>
            <View style= {style.imgCover}>
                <Image
                        style= {style.img}
                        source= {image}
                        resizeMode='cover'
                        >
                </Image>
                <View style= {style.txtContainer}>
                    <View style={style.overTxt}>
                        <Text> Terapia ABA (Análise do Comportamento Aplicada) é uma abordagem terapêutica baseada em princípios científicos da psicologia comportamental. Ela busca modificar comportamentos significativos através da aplicação de técnicas de reforço positivo e estratégias de ensino individualizadas. É frequentemente utilizada no tratamento de distúrbios do espectro autista e outros transtornos do desenvolvimento, visando promover habilidades sociais, comunicativas e de autocuidado.</Text>
                    </View>
                </View>
            </View>    
        </>
        )

    }



    return(
    <>
       <View style = {style.container}>
            <Pressable style = {style.listItem} onPress={() => setModalVisible(true)}>
                <Text> Terapia Comportamental Aplicada (ABA) </Text>
            </Pressable>
            <Pressable style = {style.listItem}>
                <Text> Terapia Ocupacional (TO): </Text>
            </Pressable>
            <View style = {style.listItem}>
                <Text> Terapia da Fala e Linguagem </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Intervenção Precoce </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Terapia Sensorial </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Terapia Social Pragmática </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Intervenção Comportamental Early Start Denver (ESDM) </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Terapia de Desenvolvimento Relacional (RDI) </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Terapia de Integração Sensorial </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Musicoterapia </Text>
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
                }}>
                <View style={style.modalContainer}>
                    <View style={style.modalStyle}>
                        <InterModal image = {aba}/>
                        <View style={style.overBtnClose}>
                            <View style={style.buttonClose}>
                                <Pressable onPress={() => setModalVisible(!modalVisible)} >
                                    <Text> Fechar </Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

       </View>         
    
    </>
    )
}


const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f5cee7',
        justifyContent: 'space-around',
    },

    listItem: {
        height: '5%',
        width: '95%',
        backgroundColor: '#eabefa',
        borderRadius: 50,
        elevation: 5,
    },
    modalStyle: {
        height: '87%',
        width: '95%',
        backgroundColor: '#b4a6f7',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 30,
        elevation: 5,
    },
    modalContainer: {
        flex: 1,
        paddingTop: '2%',
        justifyContent: 'center',
        alignItems: 'center',
  
    },
    txtContainer: {
        height: '80%',
        width: '100%',
        paddingTop: '3%',
        elevation: 4,
    },
    overTxt: {
        height: '100%',
        width: '100%',
        padding: '3%',
        backgroundColor: '#c8c6f7',
        borderRadius: 20,
        elevation: 5,
        borderWidth: 0.5,
        borderColor: 'white',
    },
    overBtnClose:{
        paddingBottom: '3%',
        height: '10%',
        width: '40%',
    },
    buttonClose: {
        height: '100%',
        width: '100%',
        backgroundColor: '#8fb2f7',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        borderRadius: 40,
    }, 
    imgCover: {
        width: '90%',
        height: '52%', 
        justifyContent: 'space-between',
        paddingTop: '5%',
        //borderColor: 'red',
        //borderWidth: 4
    },  
    img: {
        width: '100%',
        height: '100%', 
      },

})