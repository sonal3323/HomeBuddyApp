// core
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// components & theme
import { Spinner, NativeBaseProvider } from 'native-base';
import { theme } from './theme';
import { useColorScheme } from 'react-native';

import { Root } from './Root';

export default function App() {
  const mode = useColorScheme();
  theme.config.initialColorMode = mode;
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider>
        <Root theme={theme} />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
