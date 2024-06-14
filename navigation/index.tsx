import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

// theme
import { ITheme } from 'native-base';
import { navDarkTheme, navLightTheme } from '../theme';

// routing
import { HomeScreen } from '../screens/HomeScreen';

// type
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator({ theme }: { theme: ITheme }) {
  return (
    <NavigationContainer
      linking={linking}
      theme={
        theme.config?.initialColorMode === 'dark' ? navDarkTheme : navLightTheme
      }
    >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={() => ({
            title: 'Home',
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Explore"
          component={HomeScreen}
          options={() => ({
            title: 'Explore',
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Learn"
          component={HomeScreen}
          options={() => ({
            title: 'Learn',
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Profile"
          component={HomeScreen}
          options={() => ({
            title: 'Profile',
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Home: 'home',
      Explore: 'explore',
      Learn: 'learn',
      Profile: 'profile',
    },
  },
};
