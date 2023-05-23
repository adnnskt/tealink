import React, {useState, useMemo, useCallback} from 'react';
import {StyleSheet, Text, View, TextStyle} from 'react-native';
import {CalendarList, DateData, Agenda} from 'react-native-calendars';



export default props => {



    return (
        <Agenda 
        
        items={{
            '2023-05-22': [{name: 'item 1 - any js object'}],
            '2023-05-23': [{name: 'item 2 - any js object', height: 80}],
            '2023-05-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
          }}
          

        />
    )
}

