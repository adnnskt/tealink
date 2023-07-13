import React from "react";
import { NativeBaseProvider, Box, Center, Text, ScrollView, Pressable} from "native-base";
import {View, StyleSheet, ImageBackground} from 'react-native'

const LinearGradient = require('expo-linear-gradient').LinearGradient;

export default props => {


  const Content = () => {
    
    return <Box flex={1} bg={{
      linearGradient: {
        colors: ['primary.200', 'violet.600'],
        start: [0, 0.2],
        end: [1.2, 1]
      }
    }}>
      <Box
        paddingTop="3%"
        height="10%"
        width="50%"
      >
        <Box 
          bg="primary.500"
          width="100%"
          height="100%"
          borderRightRadius="60"
          shadow="3"
          justifyContent="center"
          
        >
          <Text
            paddingLeft="3%"
            fontSize="xl"
            color="white"
          >
             Crise 
          </Text>
        </Box>

      </Box>
 
      <Box
        paddingTop="3%"
        width="80%"
        height="75%"
      >
        <Box
          bg="purple.700"
          width="100%"
          height="100%"
          borderRightRadius="40"
          shadow="3"
        >
          <Box
            width="100%"
            borderBottomWidth= "1"
            borderColor="grey"
          >
            <Text
              width="100%"
              fontSize="xl"
              padding="2%"
              color="white"              
            >
              O que é?
            </Text>
          </Box>
              <ScrollView
                width="80%" height="30%"
              >
                
                <Text
                  paddingLeft="1%"
                  paddingTop="3%"
                  fontSize="xs"
                  color="white"
                >
                    Uma crise em pessoas dentro do espectro do autismo é uma reação intensa a estímulos 
                    ou situações desafiadoras. Pode ocorrer devido a dificuldades sensoriais, emocionais 
                    ou cognitivas que são mais pronunciadas em pessoas com autismo. Durante uma crise, 
                    a pessoa pode apresentar comportamentos como agitação, agressividade ou choro. 
                    É importante entender que essas crises não são birras, mas sim respostas a desafios 
                    enfrentados na percepção e processamento de informações do ambiente. 
                    Oferecer um ambiente calmo, apoio emocional e compreensão das necessidades individuais 
                    pode ajudar a pessoa a lidar com a crise de forma mais tranquila.
                </Text>

              </ScrollView>              
        </Box>         
      
      </Box>
      <Box
        paddingTop="3%"
        width="100%"
        height="10%"
      >
        <Box
            borderTopWidth= "1"
            width="80%"
            height="100%"
            bg="purple.900"
            borderRightRadius="60"
            shadow="2"
            justifyContent="space-around"
            alignItems="center"
            flexDirection="row"
          >
            <Text
              fontSize="xl"
              color="white"
            >Adicionar frequência
            </Text>
            <Pressable
              width='20%'
              height='90%'
              bg="purple.500"
              borderRightRadius="60"
              borderLeftRadius="60"
              borderBottomRadius="60"
              borderTopRadius="60"
              justifyContent="center"
              alignItems="center"
              shadow="2"
              borderColor="white"
              borderWidth="1"
            >
              <Box
                width='100%'
                height='100%'
                borderRightRadius="60"
                borderLeftRadius="60"
                borderBottomRadius="60"
                borderTopRadius="60"
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  fontSize="3xl"
                  color="white"
                >+
                </Text>
              </Box>
            </Pressable>
          </Box>
      </Box>
    </Box>
  }



  const config = {
    dependencies: {
      'linear-gradient': LinearGradient
    }
  }

  return (
    <NativeBaseProvider config={config}>
      <Content>
      </Content>   
    </NativeBaseProvider>
  )
}
