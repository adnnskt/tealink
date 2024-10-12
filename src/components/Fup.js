import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, Image, Button } from 'react-native';
import axios from 'axios';
import * as Location from 'expo-location';
import { Linking } from 'react-native';


export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [clinics, setClinics] = useState([]);

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
  
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=3000&type=${type}&keyword=${keyword}&key=${apiKey}`;
  
    try {
      const response = await axios.get(url);
      clinicsData = response.data.results
      setClinics(clinicsData); // Atualiza o estado clinics com os resultados
    } catch (error) {
      console.error('Erro ao buscar clínicas:', error);
      setClinics([]); // Define clinics como uma lista vazia em caso de erro
    }
  
  };
  
  const handleFetchClinics = () => {
    if (textLat && text) {
      fetchClinics(textLat, text);
    } else {
      console.warn('Localização ainda não obtida.');
    }
    console.warn(clinics)
  };

  const ClinicList = () => {
    //const [clinics, setClinics] = useState([]);
  
    useEffect(() => {
      const getClinics = async () => {
        //const location = await getLocation();
        const results = await fetchClinics(textLat, text);
        setClinics(results);
      };
      console.warn(clinics)

      getClinics();
    }, [])
    return clinics
  };

  //let clinicsList = ClinicList()
  // chave googleAPI AIzaSyB3p0i5EHtJoTDF2RfHD8Fnov-5uoyEMHU
  // <Text style={styles.paragraph}>long{text} lat{textLat}</Text>

  const renderClinicItem = ({ item }) => {

    const openInGoogleMaps = () => {
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name)}&query_place_id=${item.place_id}`;
      Linking.openURL(googleMapsUrl);
    };

    return (
      <View style={styles.card}>
        <Text style={styles.clinicName}>{item.name}</Text>
        <Text style={styles.address}>{item.vicinity}</Text>
        <Text style={styles.rating}>
            {`Avaliação: ${item.rating} (${item.user_ratings_total} avaliações)`}
        </Text>
        <Text style={styles.rating}>
            {`Telefone: ${item.formatted_phone_number}`}
        </Text>
        <Text style={styles.rating}>
            {`web site: ${item.website}`}
        </Text>
        <Text style={styles.link} onPress={openInGoogleMaps}>
         Mais detalhes
        </Text>
      

        
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.groupOptions}>
          <View style={styles.subGroupOptions}>
            <View style={styles.option}>
              <Text style={styles.textOption}>Psiquiatria</Text>
            </View>
            <View style={styles.option}>
              <Text style={styles.textOption}>Neurologia</Text>
            </View>
          </View>

          <View style={styles.subGroupOptions}>
            <View style={styles.option}>
              <Text style={styles.textOption}>Fisioterapia</Text>
            </View>
            <View style={styles.option}>
              <Text style={styles.textOption}>Psicologia</Text>
            </View>
          </View>

          <View style={styles.subGroupOptions}>
            <View style={styles.option}>
              <Text style={styles.textOption}>Clinica TEA</Text>
            </View>
            <View style={styles.option}>
              <Text style={styles.textOption}>Psicologia</Text>
            </View>
          </View>

      </View>
      <Text>Clínicas Próximas:</Text>
      <FlatList
        data={clinics}
        keyExtractor={(item) => item.place_id}
        renderItem={renderClinicItem}
      />
      <Button 
        title='List'
        style={styles.button} 
        onPress={handleFetchClinics} 
      
      />
    </View>
  )
}


/*
  {"coords": {"accuracy": 600,"longitude":-122.083922,"Altitude":0,"heading":0,"latitude":37.4220936}}

  ({ item }) => <Text>{item.name}</Text> 
   renderClinicItem 
*/



//longitude: -122.083922 latitude: 37.4220936

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  groupOptions: {
    width: '100%',
    height: '15%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: '1%',
    borderWidth: 4,
    borderColor: 'red',
  },
  subGroupOptions: {
    height: '100%',
    width: '30%',
    borderWidth: 4,
    borderColor: 'red',
    justifyContent: 'space-between',
  },
  option: {
    height: '45%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'grey',
    elevation: 5,
  },
  textOption: {
    color: 'white',
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
  errorText: {
    fontSize: 18,
    color: 'red',
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
  button:{
    width:'20%',
    height:'20%',
    backgroundColor: 'blue',


  },
  link: {
    fontSize: 16,
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

