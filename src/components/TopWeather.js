import React, { useEffect, useState } from 'react';

import { getWeather } from '../services/WeatherServices';
import WeatherList from '../services/WeatherList';
import { SafeAreaView, StyleSheet, Text, View, Switch, ImageBackground } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient'
import TodaysWeatherList from '../services/TodaysWeatherList';

const TopWeather = ({ city }) => {
  
  const [weatherData, setWeatherData] = useState([]);
  const [weatherCondition, setWeatherCondition] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const weather = await getWeather(city);
        setWeatherData(weather.data.list);
        setWeatherCondition(weather.data.list[0].weather[0].main); // Set the weather condition for the background
      } catch (e) {
        console.error(e);
      }
    };

    loadData();
  }, [city]);

  const getBackgroundImage = (condition) => {
    switch (condition) {
      case 'Clear':
        return require('../../assets/sun.png');
      case 'Clouds':
        return require('../../assets/cloud.png');
      case 'Rain':
        return require('../../assets/rain.png');
      case 'Snow':
        return require('../../assets/snow.png');
      default:
        return require('../../assets/sun.png');
    }
  };
  return (
    <ImageBackground
    source={getBackgroundImage(weatherCondition)} 
        >
    <View style={{
        marginBottom:'5%',
    }}>
        <TodaysWeatherList weatherData={weatherData} city = {city}/> 
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  
  
  switchContainer: {
    alignItems: 'center',
    marginVertical: '22%',
    
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', // Adjust as needed
    marginBottom: 30,
  },
  switchLabel: {
    fontSize: 18,
  },
 
});

export default TopWeather;
