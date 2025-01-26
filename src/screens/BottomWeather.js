import React, { useEffect, useState } from 'react';

import { getWeather } from '../services/WeatherServices';
import WeatherList from '../services/WeatherList';
import { SafeAreaView, StyleSheet, Text, View, Switch } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient'

const BottomWeather = ({ route }) => {
  const { city} = route.params;

  const [viewMode, setViewMode] = useState('daily');
  const [weatherData, setWeatherData] = useState([]);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const weather = await getWeather(city);
        setWeatherData(weather.data.list);
      } catch (e) {
        console.error(e);
      }
    };

    loadData();
  }, [city]);

  const toggleSwitch = (value) => {
    setIsSwitchOn(value);
    setViewMode(value ? 'weekly' : 'daily');
  };

  return (
    
    <SafeAreaView style={{marginVertical:'120%'}}>
    
      <View style={
        {marginBottom:'-80%',
            
        }
      }>
        <LinearGradient
        colors={['#ac77a6', '#886dba']} 
        style={styles.gradient}   
        start={{x: 0.5, y: 0}}  // Start from the top (y: 0)
        end={{x: 0.5, y: 1}} 
      >
        {/* Switch Container */}
        <View style={styles.switchContainer}>
          <View style={styles.labelContainer}>
            {/* "Daily" Label */}
            <Text
              style={[
                styles.switchLabel,
                { color: !isSwitchOn ? 'white' : 'purple', fontWeight: !isSwitchOn ? 'bold' : 'normal' },
              ]}
            >
              Daily
            </Text>

            {/* "Weekly" Label */}
            <Text
              style={[
                styles.switchLabel,
                { color: isSwitchOn ? 'white' : 'purple', fontWeight: isSwitchOn ? 'bold' : 'normal' },
              ]}
            >
              Weekly
            </Text>
          </View>

          {/* Switch */}
          <Switch
            value={isSwitchOn}
            onValueChange={toggleSwitch}
            thumbColor={isSwitchOn ? 'white' : 'white'}
            trackColor={{ false: 'purple', true: 'purple' }}
            ios_backgroundColor={'purple'}
            style={
                { transform: [{ scaleX: 15 }, { scaleY: .5 }],
             }
            }
          />
        </View>

        {/* Weather List */}
        {weatherData.length > 0 && <WeatherList weatherData={weatherData} viewMode={viewMode} />}
        </LinearGradient>
      </View>
      
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  
  
  switchContainer: {
    alignItems: 'center',
    marginVertical: '2%',
    
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', // Adjust as needed
    marginBottom: 10,
  },
  switchLabel: {
    fontSize: 18,
  },
 
});

export default BottomWeather;
