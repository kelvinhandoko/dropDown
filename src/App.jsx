import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Center,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import ComboBox from './component/comboBox';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <Box textAlign="center" fontSize="xl">
        <Center>
          <ComboBox />
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;
