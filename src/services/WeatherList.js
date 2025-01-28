// src/components/WeatherList.js
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const groupByDate = (weatherData) => {
    const groupedData = [];
    let currentDate = '';
  
    // Iterate through the weather data and group by date
    weatherData.forEach((item) => {
      const forecastDate = new Date(item.dt * 1000).toLocaleDateString(); // Convert timestamp to date
      if (forecastDate !== currentDate) {
        currentDate = forecastDate;
        groupedData.push(item); // Add the first entry for that date
      }
    });
  
    return groupedData;
  };

  const getDayName = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return dayNames[date.getDay()];
  };

  const getTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit' });
  };


const WeatherList = ({ weatherData, viewMode }) => {
    const filteredData =
    viewMode === 'daily'
      ? weatherData.slice(0, 5) // Only show one item for daily
      : groupByDate(weatherData.slice(0,70)); // Group by date for weekly view

    const renderItem = ({ item }) => (
        <View style={styles.item}>
          {/* Date & Time */}
      <Text style={styles.time}>
         {/* For Weekly View: Show day name */}
      {viewMode === 'weekly' ? (
        <Text style={styles.day}>{getDayName(item.dt)}</Text>
      ) : (
        // For Daily View: Show time
        <Text style={styles.time}>{getTime(item.dt)}</Text>
      )}
        </Text>

        {/* Icon */}
            <Image
                source={{ uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` }}
                style={styles.icon}
                />
    
          {/* Temperature */}
          <Text style={styles.temp}>
          {viewMode === 'daily'
            ? `${(item.main.temp).toFixed(0)}°` 
            : `${(item.main.temp_min).toFixed(0)}° / ${(item.main.temp_max).toFixed(0)}°`} 
          </Text>
        </View>
      );
  return (
    <FlatList
      data={filteredData} // Display the first 4 items
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true} // Enable horizontal scrolling
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
    />  
  );
};

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 10,
        
      },
  
  item: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical:100,
    marginTop: '20%',
    padding: 10,
    borderRadius: 35,
    backgroundColor: '#bd8bbf',
  },
  time: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 25,
    color: 'white'
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 5,
    marginTop: -15
  },
  temp: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white'
  },
});

export default WeatherList;
