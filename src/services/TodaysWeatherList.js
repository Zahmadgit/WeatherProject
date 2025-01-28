import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCity } from '../context/CityContext'; // Import the custom hook

const TodaysWeatherList = ({ weatherData, city: propCity}) => {
  const { city: contextCity } = useCity();
  
    // Use prop city if provided, otherwise fall back to context city
  const city = propCity || contextCity;
  if (!weatherData || weatherData.length === 0) {
    return null; // Handle empty or invalid weatherData
  }


  // Get today's data (assume the first item represents today's weather)
  const today = weatherData[0];
  const getBackgroundColor = (condition) => {
    switch (condition) {
      case 'Clear':
        return '#8c6fb8';
      case 'Clouds':
        return '#72a7ca'; 
      case 'Rain':
        return '#7ec8ba'; 
      case 'Snow':
        return '#ADD8E6'; 
      default:
        return '#D3D3D3';
    }
  };

  return (
    <View style={styles.container}>
     
     <Text style={styles.cityLabel}>{city}</Text>
      <View style={
        {...styles.circle, 
            backgroundColor: getBackgroundColor(today.weather[0].main)

        }}>
      <Text style={styles.tempLabel}>{today.weather[0].main}</Text>
        {/* Current Temperature */}
        <Text style={styles.currentTemp}>{`${today.main.temp.toFixed(0)}°`}</Text>

        {/* High and Low */}
        <View style={styles.highLowContainer}>
          <Text style={styles.tempLabel}>H: {`${today.main.temp_max.toFixed(0)}°  `}</Text>
          <Text style={styles.tempLabel}>L: {`${today.main.temp_min.toFixed(0)}°`}</Text>
        </View>
        </View>
        <Text style={styles.happyNote}>You totally got this.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    
    marginTop: '20%',
    
  
  },
  circle: {
    width: 250,
    height: 250,
    borderRadius: 150,
    borderWidth: 12,
    backgroundColor: '#73a7cb', // Circle background color
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#92708b'
  },
  currentTemp: {
    fontSize: 90,
    fontWeight: '300',
    color: 'white',
    marginBottom: 50,
  },
  highLowContainer: {
    marginTop: -60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  tempLabel: {
    fontSize: 18,
    color: 'white',
    marginBottom: -15,
  },
  cityLabel: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10
  },
  happyNote: {
    fontSize: 24,
    color: 'white',
    marginTop: '5%'
  },
});

export default TodaysWeatherList;
