import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { gStyle } from '../../styles/GeneralStyles';
import MainButton from '../items/MainButton'

const Player = ({navigation}) => {
    const loadScreen = (screen) => {
        navigation.navigate(screen, { playerName });
    };

    const [playerName, setPlayerName] = useState("");

    const onChange = (playerName) => {
        setPlayerName(playerName);
    };

    return (
        <View style={gStyle.screen}>
            <Text style={gStyle.text}>Name:</Text>
            <TextInput style={gStyle.input} onChangeText={onChange}/>
            <MainButton title='Begin' pressFunction={() => {loadScreen('playerButton')}}/>
        </View>
    );
};

export default Player;
