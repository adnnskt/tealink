import React, { useState, useEffect } from 'react';
import { Platform, Text, View, FlatList, StyleSheet } from 'react-native';
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
    const keyword = 'hospital'; // psicologia, psiquiatria Especializações desejadas
  
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=${type}&keyword=${keyword}&key=${apiKey}`;
  
    try {
      const response = await axios.get(url);
      return response.data.results;
    } catch (error) {
      console.error('Erro ao buscar clínicas:', error);
      return [];
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

  const renderClinicItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.clinicName}>{item.name}</Text>
        <Text style={styles.address}>{item.vicinity}</Text>
        {item.rating && (
          <Text style={styles.rating}>
            {`Avaliação: ${item.rating} (${item.user_ratings_total} avaliações)`}
          </Text>
        )}
        {item.photos && item.photos.length > 0 && (
          <Image
            style={styles.photo}
            source={{
              uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.photos[0].photo_reference}&key=MY_API_KEY`,
            }}
          />
        )}
      </View>
    );
  };


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
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  clinicName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  photo: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginTop: 10,
  },
});