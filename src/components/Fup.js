import React, { useState, useEffect } from 'react';
import { Platform, Text, View, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [clinics, setClinics] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  let textLat = '';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location.coords.longitude);
    textLat = JSON.stringify(location.coords.latitude);
    
  }

  const fetchClinics = async (latitude, longitude) => {
    const apiKey = 'AIzaSyB3p0i5EHtJoTDF2RfHD8Fnov-5uoyEMHU';
    const type = 'health'; // Tipo genérico para clínicas de saúde
    const keyword = 'hospital'; // psicologia, psiquiatria Especializações desejadas
  
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=${type}&keyword=${keyword}&key=${apiKey}`;
  
    try {
      const response = await axios.get(url);
      setClinics(response.data.results);
    } catch (error) {
      console.error('Erro ao buscar clínicas:', error);
    }
  };

  const ClinicList = () => {
    const [clinics, setClinics] = useState([]);
  
    useEffect(() => {
      const getClinics = async () => {
        //const location = await getLocation();
        const results = await fetchClinics(textLat, text);
        setClinics(results);
      };
  
      getClinics();
    }, [])
    return clinics
  };

  //let clinicsList = ClinicList()
  // chave googleAPI AIzaSyB3p0i5EHtJoTDF2RfHD8Fnov-5uoyEMHU
  // <Text style={styles.paragraph}>long{text} lat{textLat}</Text>

  return (
    <View style={styles.container}>
      
      <Text>Clínicas Próximas:</Text>
      <FlatList
        data={ClinicList()}
        keyExtractor={(item) => item.place_id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  )
}

/*
  {"coords": {"accuracy": 600,"longitude":-122.083922,"Altitude":0,"heading":0,"latitude":37.4220936}}

*/

//longitude: -122.083922 latitude: 37.4220936

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});