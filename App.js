import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
//import Ionicons from '@react-native-vector-icons/ionicons';
//import Entypo from '@expo/vector-icons/Entypo';
import Home from './src/components/Home'
import Calendar from './src/components/Calendar'
import Place from './src/components/Place'
import Registration from './src/components/Registration'
import Login from './src/components/Login'
import Fup from './src/components/Fup'
import Content from './src/views/Content'
import Hyperfocus from './src/views/Hyperfocus'
import Introvertido from './src/views/Introvertido'
import Terapia from './src/views/Terapia'
import Desfralde from './src/views/Desfralde'
import Medicamento from './src/views/Medicamento'


import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }



function HomeScreen({ navigation, route}) {
  const data = route.params
  //alert(data.user)
  return (
    <Home navigation = {navigation}
    user = {data.user}
    />
  );
}

function ContentView({route}){
  const data = route.params
  return(
    <Content 
      user = {data.user}
    />
  )
}

function HyperfocusView({route}){
  const data = route.params
  return(
    <Hyperfocus 
      user = {data.user}
    />
  )
}

function IntrovertidoView({route}){
  const data = route.params
  return(
    <Introvertido 
      user = {data.user}
    />
  )
}


function MedicamentoView({route}){
  const data = route.params
  return(
    <Medicamento 
      user = {data.user}
    />
  )
}



function TerapiaView({route}){
  const data = route.params
  return(
    <Terapia 
      user = {data.user}
    />
  )
}

function DesfraldeView({route}){
  const data = route.params
  return(
    <Desfralde 
      user = {data.user}
    />
  )
}



function CalendarScreen() {
  return (
    
    <Calendar />
    
  );
}

function PlaceScreen({route}) {
  const data = route.params
  return (
    
    <Place 
      user = {data.user}
    />
    
  );
}

function FupScreen({route}) {
  const data = route.params
  return (
    
    <Fup 
      user = {data.user}
    />
    
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function MyTabs({route}) {
  const data = route.params
  //alert(data.user)
  return (
    <Tab.Navigator
        //user={data.user}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Calendário') {
              iconName = focused ? 'calendar' : 'calendar';
            } else if (route.name === 'Clinica') {
              iconName = focused ? 'map-marker' : 'map-marker';
            } else if (route.name === 'Acompanhamento') {
              iconName = focused ? 'bar-chart' : 'bar-chart';
            } 
            
            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} initialParams={{user: data.user}}/>
        <Tab.Screen name="Calendário" component={CalendarScreen} />
        <Tab.Screen name="Clinica" component={PlaceScreen} initialParams={{user: data.user}}/>
        <Tab.Screen name="Acompanhamento" component={FupScreen} initialParams={{user: data.user}}/>
        

      </Tab.Navigator>
  );
}


function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  return (
  <>
    <NavigationContainer>
    <Stack.Navigator>
      {user ?(
        <Stack.Screen
        name="menuTabe"
        component={MyTabs}
        options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="MenuTab" component={MyTabs} options={{ headerShown: false }}/>
        </>
      )

      }
        <Stack.Screen name="Crise" component={ContentView} />
        <Stack.Screen name="Hiperfoco" component={HyperfocusView} />
        <Stack.Screen name="Introvertido" component={IntrovertidoView} />
        <Stack.Screen name="Terapia" component={TerapiaView} />
        <Stack.Screen name="Desfralde" component={DesfraldeView} />
        <Stack.Screen name="Medicamento" component={MedicamentoView} />
        
        
        
    </Stack.Navigator>
    </NavigationContainer>
  </>
  );
}

export default App;