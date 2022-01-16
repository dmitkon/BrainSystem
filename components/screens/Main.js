import React from 'react';
import { Text, Image, SafeAreaView } from 'react-native';
import { gStyle } from '../../styles/GeneralStyles';
import MainButton from '../items/MainButton';

const Main = ({navigation}) => {
    const loadScreen = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <SafeAreaView style={gStyle.screen}>
            <Text style={gStyle.brainTitle}>Брейн-система</Text>
            <Image style={gStyle.brainDisplay} source={require('../../res/BrainSystem.png')} />
            <MainButton title='Ведущий' onPress={() => {loadScreen('host')}} />
            <MainButton title='Игрок' onPress={() => {loadScreen('player')}} />
        </SafeAreaView>
    );
};

export default Main;
