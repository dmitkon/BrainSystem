import React, { useState } from 'react';
import { Text, TextInput, SafeAreaView } from 'react-native';
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
        <SafeAreaView style={gStyle.screen}>
            <Text style={gStyle.text}>Имя:</Text>
            <TextInput style={gStyle.input} onChangeText={onChange} />
            <MainButton title='Начать' onPress={() => {loadScreen('playerButton')}} />
        </SafeAreaView>
    );
};

export default Player;
