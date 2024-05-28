import React, {useState} from "react";
import { Text, Image, View, StyleSheet,  Pressable, ScrollView, Modal, Switch} from 'react-native'
const aba = require("../../src/img/aba.jpg") 
const to = require("../../src/img/TO.jpg") 
const fala = require("../../src/img/terapiaFala.jpg") 
const interPrecoce = require("../../src/img/intervencaoPrecoce.jpg") 
const sensorial = require("../../src/img/sensorial.jpg") 
const social = require("../../src/img/social.jpg") 
const denver = require("../../src/img/denver.jpg") 
const rdi = require("../../src/img/rdi.jpg") 
const iSocial = require("../../src/img/integracaoSensorial.jpg") 
const musicoterapia = require("../../src/img/musicoterapia.jpg") 


export default props => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    

    return(
    <>
        <View style = {style.container}>
            <View style = {style.overSwitch}>
                <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    style={{ transform: [{ scaleX: 3.5 }, { scaleY: 3.2 }] }}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

        </View>         
    
    </>
    )
}


const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#c3c9c5',
        justifyContent: 'space-around',
    },
    overSwitch: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'red',
    }
})
