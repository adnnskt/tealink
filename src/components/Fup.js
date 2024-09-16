import { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import axios from 'axios';

import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
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
    const keyword = 'psicologia, psiquiatria'; // Especializações desejadas
  
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=${type}&keyword=${keyword}&key=${apiKey}`;
  
    try {
      const response = await axios.get(url);
      return response.data.results;
    } catch (error) {
      console.error('Erro ao buscar clínicas:', error);
      return [];
    }
  };


  // chave googleAPI AIzaSyB3p0i5EHtJoTDF2RfHD8Fnov-5uoyEMHU
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>long{text} lat{textLat}</Text>
    </View>
  );
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