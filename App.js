import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';
import Home from './src/components/Home'
import Calendar from './src/components/Calendar'
import Fup from './src/components/Fup'
import Content from './src/views/Content'



function HomeScreen({ navigation }) {
  return (
    <Home navigation = {navigation}/>
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

function MyTabs() {
  return (
    <Tab.Navigator
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

const Stack = createNativeStackNavigator();

function App() {
  return (
  <>
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  </>
  );
}

export default App;