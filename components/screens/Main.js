import React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { gStyle } from '../../styles/GeneralStyles';

const Main = ({navigation}) => {
    const loadScreen = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <View style={gStyle.screen}>
            <Text style={gStyle.text} >Brain System</Text>
            <Image style={{width: 300, height: 300}} source={require('../../res/BrainSystem.png')} />
            <TouchableOpacity style={gStyle.menuButton} title='Host' onPress={() => {loadScreen('host')}} >
                <Text style={gStyle.buttonText} >Host</Text>
            </TouchableOpacity>
            <TouchableOpacity style={gStyle.menuButton} title='Player' onPress={() => {loadScreen('player')}} >
                <Text style={gStyle.buttonText} >Player</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Main;
