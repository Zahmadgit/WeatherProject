import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View } from 'react-native';
import { useCity } from '../context/CityContext';
import { useNavigation } from '@react-navigation/native';

const FirstPage = () => {
  const [text, setText] = useState('');
  const { setCity } = useCity(); // Access the setCity function from context
  const navigation = useNavigation();

  const onSignUpPressed = () => {
    setCity(text); // Set the city in the context
    navigation.navigate('Tabs'); // Navigate to the Tabs screen
  };

  return (
    <View style={{...styles.textInput}}>
                <TextInput
                    editable
                    multiline
                    numberOfLines={4}
                    style={styles.textInput}
                    onChangeText ={setText}
                    value={text}
                    placeholder="Enter city name"
            
                />

            <Button title={'View Weather'}onPress={onSignUpPressed}>
            </Button>
        </View>
  );
};

const styles = StyleSheet.create({
    textInput:{
        padding: 20,
        backgroundColor: 'yellow',
        fontSize: 20
        
    }
});

export default FirstPage;