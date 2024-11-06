import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, Button, Pressable } from 'react-native';
import axios from 'axios';
import * as Location from 'expo-location';
import { Linking } from 'react-native';

export default function App() {
 

  return (
    <View style={styles.container}>
      <View style={styles.groupOptions}>
        {optionsList.map((option) => (
          <Pressable
            key={option}
            style={({ pressed }) => [
              {
                backgroundColor: activeOptions.includes(option) ? '#282640' : 'grey',
                transform: [{ scale: pressed ? 0.95 : 1 }],
              },
              styles.option,
            ]}
            onPress={() => handleOptionPress(option)}
          >
            <Text style={styles.textOption}>{option}</Text>
          </Pressable>
        ))}
      </View>

      <Text>Clínicas Próximas:</Text>
      <FlatList
        data={clinics}
        keyExtractor={(item) => item.place_id}
        renderItem={renderClinicItem}
      />

      <Button title="Listar Clínicas" onPress={handleFetchClinics} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  groupOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  option: {
    width: '30%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 5,
    elevation: 5,
  },
  textOption: {
    color: 'white',
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    elevation: 5,
  },
  clinicName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 14,
    color: '#555',
  },
  rating: {
    fontSize: 14,
    color: '#777',
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
