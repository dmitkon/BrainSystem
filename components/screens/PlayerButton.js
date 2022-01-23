import React, { useState } from 'react';
import { Text, SafeAreaView } from 'react-native';
import SystemButton from '../items/SystemButton';
import Display from '../items/Display';
import { gStyle } from '../../styles/GeneralStyles';
import { getLight } from '../../src/lampLights';

const PlayerButton = ({route}) => {
    const [systemStatus, setSystemStatus] = useState("Система не запущена");
    const [lampLight, setLampLight] = useState(getLight(0));

    const pushHandle = () => {
        console.log("push");
    };

    return(
        <SafeAreaView style={gStyle.screen}>
            <Text style={gStyle.brainTitle}>{route.params.playerName}</Text>
            
            <Display status={systemStatus} light={lampLight} />

            <SystemButton nameIcon='thumbs-up' onPressIn={pushHandle} />
        </SafeAreaView>
    );
};

export default PlayerButton;
