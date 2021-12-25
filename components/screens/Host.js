import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { gStyle } from '../../styles/GeneralStyles';
import MainButton from '../items/MainButton';

const Host = ({navigation}) => {
    const loadScreen = (screen) => {
        navigation.navigate(screen, { hostName });
    };

    const [hostName, setHostName] = useState("");

    const onChange = (hostName) => {
        setHostName(hostName);
    };

    return (
        <View style={gStyle.screen}>
            <Text style={gStyle.text}>Name:</Text>
            <TextInput style={gStyle.input} onChangeText={onChange}/>
            <MainButton title='Begin' pressFunction={() => {loadScreen('hostSystem')}}/>
        </View>
    );
};

export default Host;
