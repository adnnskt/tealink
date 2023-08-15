import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';
import Home from './src/components/Home'
import Calendar from './src/components/Calendar'
import Registration from './src/components/Registration'
import Login from './src/components/Login'
import Fup from './src/components/Fup'
import Content from './src/views/Content'


import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }



function HomeScreen({ navigation }) {
  return (
    <Home navigation = {navigation} 
      user = {data.user}
    />
  );
}

function ContentView(){
  return(
    <Content />
  )
}

function CalendarScreen() {
  return (
    
    <Calendar />
    
  );
}

function FupScreen() {
  return (
    
    <Fup />
    
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function MyTabs({route}) {
  const data = route.params
  //alert(data.user)
  return (
    <Tab.Navigator
        user={data.user}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Calendário') {
              iconName = 'calendar';
            } else if (route.name === 'Acompanhamento') {
              iconName = 'bar-chart';
            }
            
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calendário" component={CalendarScreen} />
        <Tab.Screen name="Acompanhamento" component={FupScreen} />
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
        <Stack.Screen name="Content" component={ContentView} />
    </Stack.Navigator>
    </NavigationContainer>
  </>
  );
}

export default App;