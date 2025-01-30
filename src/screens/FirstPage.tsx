import React from 'react';
import {StyleSheet, TextInput, Button, View } from 'react-native';
import { useCityInput } from '../hooks/useCityInput';

const FirstPage: React.FC  = () => {
  const { text, setText, onSignUpPressed } = useCityInput();

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