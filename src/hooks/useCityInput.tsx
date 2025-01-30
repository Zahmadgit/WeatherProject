import { useState } from 'react';
import { useCity } from '../context/CityContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Tabs: undefined; 
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Tabs'>;

export const useCityInput = () => {
  const [text, setText] = useState('');
  const { setCity } = useCity(); // Access the setCity function from context
  const navigation = useNavigation<NavigationProp>();

  const onSignUpPressed = () => {
      setCity(text); // Set the city in the context
      navigation.navigate('Tabs');
  };

  return {
    text,
    setText,
    onSignUpPressed,
  };
};