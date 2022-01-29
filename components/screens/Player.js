import React, { useState } from 'react';
import { Text, TextInput, SafeAreaView, FlatList, View, TouchableOpacity, Alert } from 'react-native';
import { gStyle } from '../../styles/GeneralStyles';

const Player = ({navigation}) => {
    const loadScreen = (screen) => {
        navigation.navigate(screen, { playerName });
    };

    const [playerName, setPlayerName] = useState("");

    const onChange = (playerName) => {
        setPlayerName(playerName);
    };

    const beginHandle = () => {
        if (true)
            loadScreen('playerButton')
        else
            Alert.alert("Error", "", [{text: "OK"}]);
    };

    return (
        <SafeAreaView style={gStyle.screen}>
            <Text style={gStyle.text}>Имя:</Text>
            <TextInput style={gStyle.input} onChangeText={onChange} />
            <FlatList data={['111111', '222222', '333333', '444444']} renderItem={({ item }) => {
                return (
                    <View>
                        <TouchableOpacity onPress={beginHandle}>
                            <Text style={{fontSize: 32}}>{item}</Text>
                        </TouchableOpacity>
                    </View>
                );
            }} />
        </SafeAreaView>
    );
};

export default Player;
