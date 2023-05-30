import React, {useState, useMemo, useCallback} from 'react';
import {StyleSheet, Text, View, TextStyle} from 'react-native';
import {CalendarList, DateData, Agenda} from 'react-native-calendars';

export default props => {

    return (
        <Agenda 
        
        items={{
            '2023-05-22': [{name: 'Consulta neuro'}],
            '2023-05-23': [{name: 'Agenda T.O'}],
            '2023-05-25': [{name: 'Agenda Fono'}]
          }}
          
          renderItem={(item, firstItemInDay) => {
            return (
                <View style = {style.event}>
                    <Text>{item.name}</Text>
                </View>
            )
          }}

          onDayPress={day => {
            '';
          }}

          renderEmptyData={() => {
            return console.warn('noting here');
          }}          
        />
    )
}

const style = StyleSheet.create({
    event:{
        //backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: '12%',
    },

})