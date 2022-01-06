import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { gStyle } from '../../styles/GeneralStyles';
import SystemButton from '../items/SystemButton';

const HostSystem = ({route}) => {
    const hostName = route.params.hostName;
    const timers = route.params.timers;
    const falseStart = route.params.fStartSwitchValue;
    const resetLastTimer = route.params.resetLTimerSwitchValue;
    const lockButtons = route.params.lockButtonsSwitchValue;

    return(
        <SafeAreaView style={gStyle.screen}>
            <Text style={gStyle.brainTitle}>{hostName}</Text>

            <SystemButton />
            
            <Text>
                Hello {hostName}! {'\n'}
                Timers {timers}s {'\n'}
                False start {falseStart ? "ON" : "OFF"} {'\n'}
                Reset last {resetLastTimer ? "ON" : "OFF"} {'\n'}
                Lock buttons {lockButtons ? "ON" : "OFF"} {'\n'}
            </Text>
        </SafeAreaView>
    );
};

export default HostSystem;
