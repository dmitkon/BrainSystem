import React from 'react';
import { Text, SafeAreaView } from 'react-native';

const HostSystem = ({route}) => {
    return(
        <SafeAreaView>
            <Text>
                Hello {route.params.hostName}! {'\n'}
                Timer 1 {route.params.timer1SwitchValue ? "ON" : "OFF"} - {route.params.timer1Value}s {'\n'}
                Timer 2 {route.params.timer2SwitchValue ? "ON" : "OFF"} - {route.params.timer2Value}s {'\n'}
                False start {route.params.fStartSwitchValue ? "ON" : "OFF"} {'\n'}
                Reset last {route.params.resetLTimerSwitchValue ? "ON" : "OFF"} {'\n'}
                Lock buttons {route.params.lockButtonsSwitchValue ? "ON" : "OFF"} {'\n'}
            </Text>
        </SafeAreaView>
    );
};

export default HostSystem;
