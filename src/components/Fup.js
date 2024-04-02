import React, {useState} from "react";
import { Text, Image, View, StyleSheet,  Pressable, FlatList, Modal, TouchableHighlight} from 'react-native'
//import { LinearGradient } from 'expo-linear-gradient'
//import { Slider, RangeSlider } from '@react-native-assets/slider';


export default props => {

    const [modalVisible, setModalVisible] = useState(false);

    return(
    <>
       <View style = {style.container}>
            <Pressable style = {style.listItem} onPress={() => setModalVisible(true)}>
                <Text> Terapia Comportamental Aplicada (ABA) </Text>
            </Pressable>
            <View style = {style.listItem}>
                <Text> Terapia Ocupacional (TO): </Text>
            </View>
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
                        <Pressable onPress={() => setModalVisible(!modalVisible)} style={style.buttonClose}>
                            <Text> Fechar </Text>
                        </Pressable>
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
        height: '40%',
        width: '90%',
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonClose: {
        height: '10%',
        width: '30%',
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    }

})