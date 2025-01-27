/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';

import { getWeather } from './src/services/WeatherServices';
import WeatherList from './src/services/WeatherList';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './src/screens/FirstPage';
import Tabs from './src/screens/Tabs';


function App(): React.JSX.Element {
  const RootStack = createNativeStackNavigator({
    screens:{
      FirstPage: FirstPage,
      Tabs: Tabs,      
    }
  })
  const Navigation = createStaticNavigation(RootStack);
  return (
    <Navigation>
   
    </Navigation>
  )
}

export default App;
