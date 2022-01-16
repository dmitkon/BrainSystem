import React, { useState } from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
import { gStyle } from '../../styles/GeneralStyles';
import SystemButton from '../items/SystemButton';
import Timer from '../items/Timer';
import { 
    getBeginState,
    getRunState,
    getButtonPushState,
    getTimeIsUpState,
    isValueState
} from '../../src/SystemStaes';
import {
    getRunCommand,
    getStopCommand,
    getResetCommand
} from '../items/Timer';
import { timerStyle } from '../../styles/TimerStyles';

const HostSystem = ({route}) => {
    const hostName = route.params.hostName;
    const timers = route.params.timers;
    const falseStart = route.params.fStartSwitchValue;
    const resetLastTimer = route.params.resetLTimerSwitchValue;
    const lockButtons = route.params.lockButtonsSwitchValue;
    
    const [systemState, setSystemState] = useState(getBeginState());
    const [timerCommands, setTimerCommands] = useState([getStopCommand(), getResetCommand()]);
    
    const pushHandle = () => {
        console.log("push");

        setSystemState(getButtonPushState());
    };

    const runHandle = () => {
        console.log("run");

        setSystemState(getRunState());
        setTimerCommands([getRunCommand()]);
    };

    const nextHandle = () => {
        console.log("next");
    };

    const resetHandle = () => {
        console.log("reset");

        setTimerCommands([getResetCommand()]);
    };

    const timeIsUpHandle = () => {
        console.log("Time is out");
    };

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

            <Timer style={timerStyle.text} time={6} commands={timerCommands} onTimeIsUp={timeIsUpHandle} />

            <View style={style.buttonPanel}>
                <SystemButton nameIcon='controller-play' onPressIn={runHandle} />
                <SystemButton nameIcon='arrow-long-right' onPressIn={nextHandle} />
                <SystemButton nameIcon='ccw' onPressIn={resetHandle}/>
            </View>

            <SystemButton nameIcon='thumbs-up' onPressIn={pushHandle} />

        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    buttonPanel: {
        flexDirection: 'row'
    }
});

export default HostSystem;
