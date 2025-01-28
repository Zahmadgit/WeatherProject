import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useCity } from '../context/CityContext'; // Import the useCity hook
import WeatherScreen from './WeatherScreen';
import { Image, StyleSheet } from 'react-native';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: [styles.tabBar, { borderTopWidth: 0 }],
        headerStyle: styles.headerStyle,
        headerTintColor: '#fff',
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../../assets/circle.png')}
            style={{
              height: 15,
              width: 15,
              tintColor: focused ? 'white' : '#574b83',
            }}
          />
        ),
        tabBarLabel: '', // Remove the tab bar label
        tabBarItemStyle: {
          paddingHorizontal: 50,
        },
      }}
    >
      {/* Default cities with initialParams removed, as we now use context */}
      <BottomTab.Screen
        name="New York"
        component={WeatherScreen}
        initialParams={{ city: 'New York' }}
      />
      <BottomTab.Screen
        name="Vehari"
        component={WeatherScreen}
        initialParams={{ city: 'Vehari' }}
      />
      {/* User city, use the city from context */}
      <BottomTab.Screen
        name="User"
        component={WeatherScreen}
        //did not need initialParams becuase of context
      />
    </BottomTab.Navigator>
  );
};

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
