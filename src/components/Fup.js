import React from "react";
import { NativeBaseProvider, Text, Box, Center } from "native-base";

const LinearGradient = require('expo-linear-gradient').LinearGradient;

export default props => {
    const Component = () => {
        return <Box bg={{
          linearGradient: {
            colors: ['danger.200', 'danger.500'],
            start: [0, 0],
            end: [1, 0]
          }
        }} p="12" rounded="xl" _text={{
          fontSize: 'md',
          fontWeight: 'medium',
          color: 'warmGray.50',
          textAlign: 'center'
        }}>
            This is a Box with Linear Gradient
          </Box>;
      };
      
      const config = {
        dependencies: {
          'linear-gradient': LinearGradient
        }
      }

  return (
    <NativeBaseProvider config={config}>
      <Center flex={1} px="3">
        <Component />
      </Center>
    </NativeBaseProvider>
  );
}