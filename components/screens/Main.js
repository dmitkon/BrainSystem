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
            <Text style={gStyle.brainTitle} >Brain System</Text>
            <Image style={gStyle.brainDisplay} source={require('../../res/BrainSystem.png')} />
            <MainButton title='Host' pressFunction={() => {loadScreen('host')}} />
            <MainButton title='Player' pressFunction={() => {loadScreen('player')}} />
        </SafeAreaView>
    );
};

export default Main;
