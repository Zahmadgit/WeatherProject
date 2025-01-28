import React from 'react';
import { SafeAreaView } from 'react-native';
import { useCity } from '../context/CityContext'; // Import the custom hook

import TopWeather from '../components/TopWeather';
import BottomWeather from '../components/BottomWeather';

const WeatherScreen = ({ route }) => {
  // Get city from context
  const { city: contextCity } = useCity();

  // Get city from route params, fallback to context if not provided
  const city = route.params?.city || contextCity;

  return (
    <SafeAreaView>
      <TopWeather city={city} />
      <BottomWeather city={city} />
    </SafeAreaView>
  );
};

export default WeatherScreen;