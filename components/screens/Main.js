import React from 'react';
import { Text, Image, SafeAreaView, StyleSheet } from 'react-native';
import { gStyle } from '../../styles/GeneralStyles';
import MainButton from '../items/MainButton';

const Main = ({navigation}) => {
    const loadScreen = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <SafeAreaView style={gStyle.screen}>
            <Text style={gStyle.brainTitle}>Брейн-система</Text>
            <Image style={style.image} source={require('../../res/BrainSystem.png')} />
            <MainButton title='Ведущий' onPress={() => {loadScreen('host')}} />
            <MainButton title='Игрок' onPress={() => {loadScreen('player')}} />
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
