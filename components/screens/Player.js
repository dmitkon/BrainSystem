import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { gStyle } from '../../styles/GeneralStyles';

const Player = () => {
    return (
        <View style={gStyle.screen}>
            <Text style={gStyle.text}>Name:</Text>
            <TextInput style={gStyle.input}/>
        </View>
    );
};

export default Player;
