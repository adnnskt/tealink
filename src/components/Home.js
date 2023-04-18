import React from 'react'
import {Text, View, StyleSheet} from 'react-native'


export default props => {

    const lado = 50 
    return (
        <View style={style.flex}>
            <View style={style.card}></View>
        </View>
         
    )
}


const style = StyleSheet.create({
    flex: {
        flexGrow: 1,
        width: '100%',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    card: {
        backgroundColor: "#000",
        height: 50,
        width: 50        
    }
})