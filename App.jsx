import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

import CalculatorSimple from './src/screens/CalculatorSimple';
import CalculatorComplex from './src/screens/CalculatorComplex';

import Styles from './src/styles/_global';
import { StatusBar } from 'react-native';
import HistoryScreen from './src/screens/History';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeBottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="CalcSimple"
      sceneContainerStyle={{
        backgroundColor: Styles.identity,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'CalcSimple') {
            return (
              <SimpleLineIcons name="calculator" size={size} color={color} />
            );
          } else if (route.name === 'CalcComplex') {
            return (
              <Ionicons
                name="ios-calculator-outline"
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: { fontSize: 12 },
        style: {
          paddingBottom: 10,
          height: 65,
          position: 'absolute',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        },
      }}
    >
      <Tab.Screen
        name="CalcSimple"
        component={CalculatorSimple}
        options={{ title: 'Calculator Simple' }}
      />
      <Tab.Screen
        name="CalcComplex"
        component={CalculatorComplex}
        options={{ title: 'Calculator' }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const theme = extendTheme({
    colors: {
      // Add new color
      newIdentity: {
        50: '#e06060',
        100: '#e06060',
        200: '#e06060',
        300: '#e06060',
        400: '#ff5757',
        500: '#ff5757',
        600: '#db7070',
        700: '#db7070',
        800: '#db7070',
        900: '#db7070',
      },
      newIdentityDark: {
        50: '#e06060',
        100: '#e06060',
        200: '#e06060',
        300: '#e06060',
        400: '#930707',
        500: '#930707',
        600: '#ff5757',
        700: '#ff5757',
        800: '#ff5757',
        900: '#ff5757',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar backgroundColor="#DE7C7C" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeBottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="History"
            component={HistoryScreen}
            options={{
              headerStyle: { backgroundColor: Styles.identity },
              headerTitleStyle: { color: 'white' },
              headerTintColor: '#FFF',
              cardStyle: { ...Styles.globalStyle.identityBackgroundColor },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
