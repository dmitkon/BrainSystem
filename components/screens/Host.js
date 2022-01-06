import React, { useState } from 'react';
import { Text, TextInput, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../../styles/GeneralStyles';
import MainButton from '../items/MainButton';
import MainSwitch from '../items/MainSwitch';

const Host = ({navigation}) => {
    const loadScreen = (screen) => {
        const timer1Value = parseInt(timer1String);
        const timer2Value = parseInt(timer2String);

        navigation.navigate(
            screen, 
            { 
                hostName,
                timer1SwitchValue,
                timer1Value,
                timer2SwitchValue,
                timer2Value,
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
        
        if (switchValue) {
            setTimer(defaultTimer);
        }

        switchHandle(!switchValue);
    };

    const onChangeTextValue = (value, handle) => {
        handle(value);
    };

    const beginButtonHandle = () => {
        if (isCorrectConfig(timer1String, timer2String)) {
            loadScreen('hostSystem');
        };
    };

    const simpleSwichHandle = (value, handle) => {
        handle(!value);
    };

    const isCorrectConfig = (timer1String, timer2String) => {
        let result = true;

        if (!(timer1String.match("^[0-9]+$") && timer2String.match("^[0-9]+$"))) {
            result = false;
        };

        return result;
    };

    return (
        <SafeAreaView style={gStyle.screen}>
            <FlatList data={[{}]} renderItem={() => {
                return (
                    <View>
                        <Text style={gStyle.text}>Name:</Text>
                        <TextInput style={gStyle.input} onChangeText={(value) => {onChangeTextValue(value, setHostName)}}/>

                        <Text style={gStyle.text} >Timer 1 (on/off):</Text>
                        <MainSwitch value={timer1SwitchValue} changeFunction={() => {
                            timerSwitchHandle(
                                timer1SwitchValue, 
                                setTimer1SwitchValue, 
                                timer1Editable, 
                                setTimer1Editable, 
                                timer1DefaultString, 
                                setTimer1String)
                        }} />

                        <Text style={gStyle.text} >Timer 1 (s):</Text>
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
