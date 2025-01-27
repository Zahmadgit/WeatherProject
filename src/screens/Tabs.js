/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';


import { getWeather } from '../services/WeatherServices';
import WeatherList from '../services/WeatherList';
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

import WeatherScreen from './WeatherScreen';


const BottomTab = createBottomTabNavigator();

const Tabs =  ({ route }) => {
    const { city } = route.params;
  return (
  
      <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: [styles.tabBar,
          {borderTopWidth: 0,
          
          }
        ], // Style for the tab bar
       
        headerStyle: styles.headerStyle, 
        headerTintColor: '#fff', 
        tabBarIcon : ({focused}) => (
          <Image source={require('../../assets/circle.png')}
          style={{
              height: 15,
              width: 15,
              tintColor: focused? 'white':'#574b83',
              
          }}></Image>
      ),
        //this controls the visibility of the tab bar name 
        tabBarLabel: '',
        tabBarItemStyle: {
          paddingHorizontal:50
        }
      }}
      >
        <BottomTab.Screen 
          name="New York"
          component={WeatherScreen}
          initialParams={{city: 'New York'}}
        />  
        <BottomTab.Screen 
          name="Vehari"
          component={WeatherScreen}
          initialParams={{city: 'Vehari'}}
        /> 
        <BottomTab.Screen 
          name="User"
          component={WeatherScreen}
          initialParams={{city}}
        /> 
    </BottomTab.Navigator>
  
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#886dba', // Tab bar background color
    height: '10%', // Tab bar height
   
  },
  headerStyle: {
    backgroundColor: 'black', // Header background color
    height: 0, // Header height
  },
 
});

export default Tabs;
