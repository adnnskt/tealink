import React from "react";
import { NativeBaseProvider, Text, Box } from "native-base";

export default props => {
  return (
    <NativeBaseProvider>
      <Box 
            //flex={1} 
            bg="#000" 
            alignItems="center" 
            justifyContent="center"
            width='50%'
            height='30%'
            >
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
    </NativeBaseProvider>
  );
}