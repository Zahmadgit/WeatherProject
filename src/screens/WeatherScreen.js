import React, { useEffect, useState } from 'react';

import { getWeather } from '../services/WeatherServices';
import WeatherList from '../services/WeatherList';
import { SafeAreaView, StyleSheet, Text, View, Switch } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient'
import TopWeather from '../components/TopWeather';
import BottomWeather from '../components/BottomWeather';


const WeatherScreen = ({ route }) => {
    const { city} = route.params;
    return(
            <SafeAreaView>
            <TopWeather city={city}></TopWeather>
            <BottomWeather city = {city}></BottomWeather>
            
            </SafeAreaView>
    )
}



export default WeatherScreen