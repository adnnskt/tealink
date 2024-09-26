import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, Image, Button } from 'react-native';
import axios from 'axios';
import * as Location from 'expo-location';


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
    return (
      <View style={styles.card}>
        <Text style={styles.clinicName}>{item.name}</Text>
        <Text style={styles.address}>{item.vicinity}</Text>
        <Text style={styles.rating}>
            {`Avaliação: ${item.rating} (${item.user_ratings_total} avaliações)`}
        </Text>
        
      </View>
    );
  };

  return (
    <View style={styles.container}>
      
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


  }
});





/*

export default function App() {
  const [location, setLocation] = useState(null);
  const [clinics, setClinics] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [fetchError, setFetchError] = useState(null); // Para capturar o erro ao buscar as clínicas

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        setLoading(false); // Finaliza o carregamento em caso de erro
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      setLoading(false); // Finaliza o carregamento após obter a localização
    })();
  }, []);

  useEffect(() => {
    const fetchClinics = async (latitude, longitude) => {
      const apiKey = 'AIzaSyB3p0i5EHtJoTDF2RfHD8Fnov-5uoyEMHU'; // Insira sua chave aqui
      const type = 'health'; // Tipo genérico para clínicas de saúde
      const keyword = 'psicologia, psiquiatria'; // Especializações desejadas

      const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=${type}&keyword=${keyword}&key=${apiKey}`;

      try {
        const response = await axios.get(url);
        setClinics(response.data.results);
      } catch (error) {
        //setFetchError('Erro ao buscar clínicas. Tente novamente mais tarde.');
        //console.error('Erro ao buscar clínicas:', error); // Mantenha o erro no console para depuração
      }
    };

    if (location) {
      fetchClinics(location.latitude, location.longitude);
    }
  }, [location]);

  let text = 'Carregando...';
  if (errorMsg) {
    text = errorMsg;
  } else if (!location && !loading) {
    text = 'Localização não disponível';
  }

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
              uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.photos[0].photo_reference}&key=AIzaSyB3p0i5EHtJoTDF2RfHD8Fnov-5uoyEMHU`,
            }}
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clínicas Próximas:</Text>
      {loading ? (
        <Text style={styles.loadingText}>{text}</Text>
      ) : fetchError ? ( // Caso ocorra erro ao buscar clínicas
        <Text style={styles.errorText}>{fetchError}</Text>
      ) : (
        <FlatList
          data={clinics}
          keyExtractor={(item) => item.place_id}
          renderItem={renderClinicItem}
          ListEmptyComponent={<Text style={styles.loadingText}>Nenhuma clínica encontrada.</Text>}
        />
      )}
    </View>
  );
}


*/

/*
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
              uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.photos[0].photo_reference}&key=AIzaSyB3p0i5EHtJoTDF2RfHD8Fnov-5uoyEMHU`,
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
        renderItem={({ item }) => renderClinicItem}
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


