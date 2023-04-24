import React from 'react'
import {Text, View, StyleSheet} from 'react-native'


export default props => {

    const lado = 50 
    return (
    <>  
        <View style={style.containner}>
            <View style={style.flex}>
                <View style={style.card}></View>
                <View style={style.card}></View>
                <View style={style.card}></View>
            </View>

            <View style={style.flex}>
                <View style={style.card}></View>
                <View style={style.card}></View>
                <View style={style.card}></View>
            </View>
        </View>
    </>  
    )
}


const style = StyleSheet.create({
    containner: {
        //flexGrow: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flex: {
        //flexGrow: 1,
        flexDirection: 'row',
        height: '50%',
        width: '100%',
        justifyContent: "space-around",
        alignItems: 'center',
    },
    card: {
        backgroundColor: "#000",
        height: '20%',
        width: '30%'        
    }
})