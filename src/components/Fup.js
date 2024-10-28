import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, Button, Pressable } from 'react-native';
import axios from 'axios';
import * as Location from 'expo-location';
import { Linking } from 'react-native';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [clinics, setClinics] = useState([]);
  const [buttonColors, setButtonColors] = useState({
    Psiquiatria: 'grey',
    Neurologia: 'grey',
    Fisioterapia: 'grey',
    Psicologia: 'grey',
    'Clinica TEA': 'grey',
    Pediatria: 'grey',
  });

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

  const fetchClinics = async (latitude, longitude) => {
    const apiKey = 'AIzaSyB3p0i5EHtJoTDF2RfHD8Fnov-5uoyEMHU';
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=3000&type=health&keyword=hospital&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      setClinics(response.data.results);
    } catch (error) {
      console.error('Erro ao buscar clínicas:', error);
      setClinics([]);
    }
  };

  const handleFetchClinics = () => {
    if (location) {
      const { latitude, longitude } = location.coords;
      fetchClinics(latitude, longitude);
    } else {
      console.warn('Localização ainda não obtida.');
    }
  };

  const handleOptionPress = (option) => {
    setButtonColors((prevColors) => ({
      ...prevColors,
      [option]: prevColors[option] === 'grey' ? 'red' : 'grey',
    }));
  };

  const renderClinicItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.clinicName}>{item.name}</Text>
      <Text style={styles.address}>{item.vicinity}</Text>
      <Text style={styles.rating}>{`Avaliação: ${item.rating} (${item.user_ratings_total} avaliações)`}</Text>
      <Text style={styles.link} onPress={() => openInGoogleMaps(item)}>
        Mais detalhes
      </Text>
    </View>
  );

  const openInGoogleMaps = (item) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name)}&query_place_id=${item.place_id}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.groupOptions}>
        {Object.keys(buttonColors).map((option) => (
          <Pressable
            key={option}
            style={({ pressed }) => [
              {
                backgroundColor: buttonColors[option],
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
