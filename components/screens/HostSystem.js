import React from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
import { gStyle } from '../../styles/GeneralStyles';
import MainButton from '../items/MainButton';
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

            <View style={gStyle.brainDisplay}>
                <Text>
                    Timers {timers}s {'\n'}
                    False start {falseStart ? "ON" : "OFF"} {'\n'}
                    Reset last {resetLastTimer ? "ON" : "OFF"} {'\n'}
                    Lock buttons {lockButtons ? "ON" : "OFF"} {'\n'}
                </Text>
            </View>
            <Text style={gStyle.text}>00:00</Text>

            <View style={style.buttonPanel}>
                <SystemButton nameIcon='controller-play' />
                <SystemButton nameIcon='arrow-long-right' />
                <SystemButton nameIcon='ccw' />
            </View>
            
            <MainButton title="Connection list" />
            <MainButton title="End" />

        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    buttonPanel: {
        flexDirection: 'row'
    }
});

export default HostSystem;
