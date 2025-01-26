import axios from 'axios';
import { WEATHER_API_KEY } from '../res/Strings';


export const getWeather = async (city) => {
  try {
    let res = await axios.get (
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=imperial`
    );

    return {success: true, data: res.data};
  } catch (e) {
    return {success: false, data: null};
  }
};

export const getWeatherByCity = async city => {
  try {
    let res = await axios.get (
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
    );

    return {success: true, data: res.data};
  } catch (e) {
    return {success: false, data: null};
  }
};