import React, {useState} from "react";
import { Text, Image, View, StyleSheet,  Pressable, ScrollView, Modal, Switch} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const menino = require("../../src/img/meninoBanheiro.jpg") 
const meninoDormindo = require("../../src/img/meninoDormindo.jpg") 


export default props => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    const backgroundColor = isEnabled ?  '#f4f3f4' : '#c3c9c5'
    return(
    <>
        <View style = {[style.container, {backgroundColor}]}>
            <View style = {style.overSwitch}>
                <View>
                    <FontAwesome name="moon-o" size={54} color="grey" />
                </View>
                <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    style={{ transform: [{ scaleX: 3.5 }, { scaleY: 3.2 }] }}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <View>
                    <FontAwesome name="sun-o" size={54} color="yellow" />
                </View>
            </View>
            <View style={style.overContent}>

            </View>

        </View>         
    
    </>
    )
}


const style = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-around',
    },
    overSwitch: {
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'red',

    },
    overContent: {
        width: '100%',
        height: '70%',
        borderWidth: 2,
        borderColor: 'red',
    },  
})
