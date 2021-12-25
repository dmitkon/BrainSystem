import React from 'react';
import { View, Text, Image } from 'react-native';
import { gStyle } from '../../styles/GeneralStyles';
import MainButton from '../items/MainButton';

const Main = ({navigation}) => {
    const loadScreen = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <View style={gStyle.screen}>
            <Text style={gStyle.text} >Brain System</Text>
            <Image style={gStyle.display} source={require('../../res/BrainSystem.png')} />
            <MainButton title='Host' pressFunction={() => {loadScreen('host')}} />
            <MainButton title='Player' pressFunction={() => {loadScreen('player')}} />
        </View>
    );
};

export default Main;
