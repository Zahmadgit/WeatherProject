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
import BottomWeather from './src/screens/BottomWeather';



const BottomTab = createBottomTabNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      
      <BottomTab.Navigator
      
      screenOptions={{
        tabBarStyle: [styles.tabBar,
          {borderTopWidth: 0,
          
          }
        ], // Style for the tab bar
       
        headerStyle: styles.headerStyle, // Custom header style
        headerTintColor: '#fff', // Header text color
        tabBarIcon : ({focused}) => (
          <Image source={require('./assets/circle.png')}
          style={{
              height: 15,
              width: 15,
              tintColor: focused? 'white':'#574b83',
              
          }}></Image>
      ),
        //this controls the visibility of the tab bar name 
        // tabBarLabel: '',
        tabBarItemStyle: {
          paddingHorizontal:50
        }
        
      }
      }
      
      >
        
        <BottomTab.Screen 
          name="New York"
          component={BottomWeather}
          initialParams={{city: 'new york'}}
          
          
        />  
        

        <BottomTab.Screen 
          name="Vehari"
          component={BottomWeather}
          initialParams={{city: 'vehari'}}
          
        />
         <BottomTab.Screen 
          name="Egypt"
          component={BottomWeather}
          initialParams={{city: 'egypt'}}
          
          
        />  
         
        
    
    </BottomTab.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#8f6fb7', // Tab bar background color
    height: '15%', // Tab bar height
   
  },
  headerStyle: {
    backgroundColor: '#8f6fb7', // Header background color
    height: 0, // Header height
  },
 
});

export default App;
