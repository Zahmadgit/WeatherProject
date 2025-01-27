import React, { useEffect, useState } from 'react';

import { SafeAreaView, StyleSheet, Text, View, Switch, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const FirstPage = () => {
    const[text, setText] = useState('')
    const navigation = useNavigation();
    const onSignUpPressed =()=>{
        navigation.navigate('Tabs', { city: text });
    }
    return(
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
    )

    
}
const styles=StyleSheet.create({
    textInput:{
        padding: 20,
        backgroundColor: 'yellow',
        fontSize: 20
        
    }
})


export default FirstPage