import React from 'react';
import { Text, Image, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { bluetoothInit } from '../../src/android/Bluetooth';
import { gStyle } from '../../styles/GeneralStyles';
import MainButton from '../items/MainButton';

const Main = ({navigation}) => {
    const loadScreen = (screen) => {
        navigation.navigate(screen);
    }

    const beginHandle = (screen) => {
        bluetoothInit().then((statusMsg) => {
            if (statusMsg == "OK")
                loadScreen(screen)
            else
                Alert.alert("Статус Bluetooth:", statusMsg, [{text: "OK"}]);
        });
    }

    return (
        <SafeAreaView style={gStyle.screen}>
            <Text style={gStyle.brainTitle}>Брейн-система</Text>
            <Image style={style.image} source={require('../../res/BrainSystem.png')} />
            <MainButton title='Ведущий' onPress={() => {beginHandle('host')}} />
            <MainButton title='Игрок' onPress={() => {beginHandle('player')}} />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    image: {
        width: 300, 
        height: 300
    }
});

export default Main;
