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
    getPauseState,
    isValueState
} from '../../src/SystemStates';
import {
    getRunCommand,
    getStopCommand,
    getResetCommand,
    getResetAndStartCommand
} from '../../src/TimerCommands';
import { timerStyle } from '../../styles/TimerStyles';
import Display from '../items/Display';
import { getLight } from '../../src/LampLights';

const HostSystem = ({route}) => {
    const hostName = route.params.hostName;
    const timers = route.params.timers;
    const falseStart = route.params.fStartSwitchValue;
    const resetLastTimer = route.params.resetLTimerSwitchValue;
    const lockButtons = route.params.lockButtonsSwitchValue;

    const isEmptyTimers = () => {
        return timers.length == 0;
    };

    const isExistNextTimer = () => {
        return timers.length > timerIndex + 1;
    };

    const [systemState, setSystemState] = useState(getBeginState());
    const [timerCommand, setTimerCommand] = useState(getResetCommand());
    const [timerIndex, setTimerIndex] = useState(isEmptyTimers() ? null : 0);
    const [systemStatus, setSystemStatus] = useState("Система не запущена");
    const [lampLight, setLampLight] = useState(getLight(0));
    
    const pushHandle = () => {
        if (isValueState(systemState, getRunState()) || isValueState(systemState, getBeginState()) && !lockButtons) {
            console.log("push");

            setSystemState(getButtonPushState());
            setLampLight(getLight(2));

            if (!isEmptyTimers())
                setTimerCommand(getStopCommand());

            if (isValueState(systemState, getBeginState()) && falseStart)
                setSystemStatus("Фальстарт");
            else
                setSystemStatus("Нажал кнопку");
        };
    };

    const runHandle = () => {
        if (isValueState(systemState, getRunState()) || isValueState(systemState, getBeginState()) || isValueState(systemState, getPauseState()))
        {
            console.log("run");

            if (isValueState(systemState, getRunState())) {
                setSystemState(getPauseState());
                setSystemStatus("Система остановлена");
                setLampLight(getLight(0));
                
                if (!isEmptyTimers())
                    setTimerCommand(getStopCommand());
            }
            else {
                setSystemState(getRunState());
                setSystemStatus("Система запущена");
                setLampLight(getLight(1));
                
                if (!isEmptyTimers())
                    setTimerCommand(getRunCommand());
            };
        };
    };

    const nextHandle = () => {
        if (isValueState(systemState, getButtonPushState())) {
            console.log("next");

            setSystemState(getRunState());
            setSystemStatus("Система запущена");
            setLampLight(getLight(1));

            if (!isEmptyTimers())
                if (isExistNextTimer()) {
                    setTimerIndex(timerIndex + 1);
                    setTimerCommand(getResetAndStartCommand());
                }
                else
                    if (resetLastTimer)
                        setTimerCommand(getResetAndStartCommand())
                    else
                        setTimerCommand(getRunCommand());
        };
    };

    const resetHandle = () => {
        console.log("reset");

        setSystemState(getBeginState());
        setSystemStatus("Система не запущена");
        setLampLight(getLight(0));

        if (!isEmptyTimers()) {
            setTimerCommand(getResetCommand());
            setTimerIndex(0);
        };
    };

    const timeIsUpHandle = () => {
        console.log("Time is up");

        setSystemState(getTimeIsUpState());
        setSystemStatus("Время истекло");
        setLampLight(getLight(0));
    };

    return(
        <SafeAreaView style={gStyle.screen}>
            <Text style={gStyle.brainTitle}>{hostName}</Text>

            <Display status={systemStatus} light={lampLight} />

            <Timer style={timerStyle.text} time={timerIndex == null ? null : timers[timerIndex]} command={timerCommand} onTimeIsUp={timeIsUpHandle} />

            <View style={style.buttonPanel}>
                <SystemButton nameIcon={isValueState(systemState, getRunState()) ? 'controller-paus' : 'controller-play'} onPressIn={runHandle} />
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
