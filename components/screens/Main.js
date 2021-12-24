import React from 'react';
import { View, Text, Button } from 'react-native';

const Main = ({navigation}) => {
    const loadScreen = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <View>
            <Text>Brain System</Text>
            <Button title='Host' onPress={() => {loadScreen('host')}}/>
            <Button title='Player' onPress={() => {loadScreen('player')}}/>
        </View>
    );
};

export default Main;
