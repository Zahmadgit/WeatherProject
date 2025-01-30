import { WEATHER_API_KEY } from '../res/Strings';

export const getWeather = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=imperial`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } 

    // Parse the JSON data from the response
    const data = await response.json();

    return { success: true, data };
  } catch (e) {
    return { success: false, data: null };
  }
};

export const getWeatherByCity = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON data from the response
    const data = await response.json();

    return { success: true, data };
  } catch (e) {
    return { success: false, data: null };
  }
};