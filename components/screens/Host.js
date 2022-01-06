import React, { useState } from 'react';
import { Text, TextInput, FlatList, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../../styles/GeneralStyles';
import MainButton from '../items/MainButton';
import MainSwitch from '../items/MainSwitch';

const Host = ({navigation}) => {
    const loadScreen = (screen) => {
        const addTimer = (timers, timer, switchValue) => {
            let new_timers = timers.slice();

            if (switchValue)
                new_timers.push(timer);

            return new_timers;
        };
        
        let timers = [];

        timers = addTimer(timers, parseInt(timer1String), timer1SwitchValue);
        timers = addTimer(timers, parseInt(timer2String), timer2SwitchValue);

        navigation.navigate(
            screen, 
            { 
                hostName,
                timers,
                fStartSwitchValue,
                resetLTimerSwitchValue,
                lockButtonsSwitchValue
            }
        );
    };

    const [hostName, setHostName] = useState("");
    
    const timer1DefaultString = "60";
    const timer2DefaultString = "20";

    const [timer1SwitchValue, setTimer1SwitchValue] = useState(false);

    const [timer1Editable, setTimer1Editable] = useState(false);
    const [timer1String, setTimer1String] = useState(timer1DefaultString);
    
    const [timer2SwitchValue, setTimer2SwitchValue] = useState(false);
    
    const [timer2Editable, setTimer2Editable] = useState(false);
    const [timer2String, setTimer2String] = useState(timer2DefaultString);

    const [fStartSwitchValue, setFStartSwitchValue] = useState(false);
    const [resetLTimerSwitchValue, setResetLTimerSwitchValue] = useState(false);
    const [lockButtonsSwitchValue, setLockButtonsSwitchValue] = useState(false);

    const timerSwitchHandle = (switchValue, switchHandle, editable, setEditable, defaultTimer, setTimer) => {
        setEditable(!editable);
        
        if (switchValue)
            setTimer(defaultTimer);

        switchHandle(!switchValue);
    };

    const onChangeTextValue = (value, handle) => {
        handle(value);
    };

    const simpleSwichHandle = (value, handle) => {
        handle(!value);
    };

    const beginButtonHandle = () => {
        let errorMsg = checkCorrectConfig(timer1String, timer2String, hostName);

        if (errorMsg == "OK")
            loadScreen('hostSystem');
        else
            Alert.alert("Host configure error", errorMsg, [{text: "OK"}])
    };

    const checkCorrectConfig = (timer1String, timer2String, hostName) => {
        const checkCorrectTimer = (timerString, number, errorMsg) => {
            if (!(timerString.match("^[0-9]+$"))) {
                if (errorMsg == "OK")
                    errorMsg = "";
    
                errorMsg = errorMsg + "\"Timer " + number + "\" must contain only numbers!" + "\n";
            };

            return errorMsg;
        };

        let errorMsg = "OK";

        if (hostName == "")
            errorMsg = "You must specify the name!" + "\n";

        errorMsg = checkCorrectTimer(timer1String, 1, errorMsg);
        errorMsg = checkCorrectTimer(timer2String, 2, errorMsg); 

        return errorMsg;
    };

    return (
        <SafeAreaView style={gStyle.screen}>
            <FlatList data={[{}]} renderItem={() => {
                return (
                    <View>
                        <Text style={gStyle.text}>Name:</Text>
                        <TextInput style={gStyle.input} onChangeText={(value) => {onChangeTextValue(value, setHostName)}}/>

                        <Text style={gStyle.text}>Timer 1 (on/off):</Text>
                        <MainSwitch value={timer1SwitchValue} changeFunction={() => {
                            timerSwitchHandle(
                                timer1SwitchValue, 
                                setTimer1SwitchValue, 
                                timer1Editable, 
                                setTimer1Editable, 
                                timer1DefaultString, 
                                setTimer1String)
                        }} />

                        <Text style={gStyle.text}>Timer 1 (s):</Text>
                        <TextInput 
                            style={gStyle.input} 
                            value={timer1String} 
                            keyboardType="numeric" 
                            onChangeText={(value) => {onChangeTextValue(value, setTimer1String)}} 
                            editable={timer1Editable} />
                        
                        <Text style={gStyle.text} >Timer 2 (on/off):</Text>
                        <MainSwitch value={timer2SwitchValue} changeFunction={() => {
                            timerSwitchHandle(
                                timer2SwitchValue, 
                                setTimer2SwitchValue, 
                                timer2Editable, 
                                setTimer2Editable, 
                                timer2DefaultString, 
                                setTimer2String)
                        }} />
                        
                        <Text style={gStyle.text} >Timer 2 (s):</Text>
                        <TextInput 
                            style={gStyle.input} 
                            value={timer2String} 
                            keyboardType="numeric" 
                            onChangeText={(value) => {onChangeTextValue(value, setTimer2String)}} 
                            editable={timer2Editable} />

                        <Text style={gStyle.text} >False start (on/off):</Text>
                        <MainSwitch value={false} changeFunction={() => {simpleSwichHandle(fStartSwitchValue, setFStartSwitchValue)}} />

                        <Text style={gStyle.text} >Reset last timer for next (on/off):</Text>
                        <MainSwitch value={false} changeFunction={() => {simpleSwichHandle(resetLTimerSwitchValue, setResetLTimerSwitchValue)}} />

                        <Text style={gStyle.text} >Lock buttons before starting the system (on/off):</Text>
                        <MainSwitch value={false} changeFunction={() => {simpleSwichHandle(lockButtonsSwitchValue, setLockButtonsSwitchValue)}} />

                        <MainButton title='Begin' pressFunction={beginButtonHandle} />
                    </View>
                );
            }} />
        </SafeAreaView>
    );
};

export default Host;
