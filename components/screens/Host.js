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

    const onChangeName = (hostName) => {
        setHostName(hostName);
    };

    const timer1SwitchHandle = () => {
        setTimer1Editable(!timer1Editable);
        
        if (timer1SwitchValue) {
            setTimer1String(timer1DefaultString);
        };

        setTimer1SwitchValue(!timer1SwitchValue);
    };

    const timer2SwitchHandle = () => {
        setTimer2Editable(!timer2Editable);
        
        if (timer2SwitchValue) {
            setTimer2String(timer2DefaultString);
        }

        setTimer2SwitchValue(!timer2SwitchValue);
    };

    const onChangeTimer1Value = (value) => {
        setTimer1String(value);
    };

    const onChangeTimer2Value = (value) => {
        setTimer2String(value);
    };

    const beginButtonHandle = () => {
        if (isCorrectConfig(timer1String, timer2String)) {
            loadScreen('hostSystem');
        };
    };

    const fStartSwitchHandle = () => {
        setFStartSwitchValue(!fStartSwitchValue);
    };

    const resetLTimerSwitchHandle = () => {
        setResetLTimerSwitchValue(!resetLTimerSwitchValue);
    };

    const lockButtonsSwitchHandle = () => {
        setLockButtonsSwitchValue(!lockButtonsSwitchValue);
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
                        <TextInput style={gStyle.input} onChangeText={onChangeName}/>

                        <Text style={gStyle.text} >Timer 1 (on/off):</Text>
                        <MainSwitch value={timer1SwitchValue} changeFunction={timer1SwitchHandle} />

                        <Text style={gStyle.text} >Timer 1 (s):</Text>
                        <TextInput 
                            style={gStyle.input} 
                            value={timer1String} 
                            keyboardType="numeric" 
                            onChangeText={onChangeTimer1Value} 
                            editable={timer1Editable} />
                        
                        <Text style={gStyle.text} >Timer 2 (on/off):</Text>
                        <MainSwitch value={timer2SwitchValue} changeFunction={timer2SwitchHandle} />
                        
                        <Text style={gStyle.text} >Timer 2 (s):</Text>
                        <TextInput 
                            style={gStyle.input} 
                            value={timer2String} 
                            keyboardType="numeric" 
                            onChangeText={onChangeTimer2Value} 
                            editable={timer2Editable} />

                        <Text style={gStyle.text} >False start (on/off):</Text>
                        <MainSwitch value={false} changeFunction={fStartSwitchHandle} />

                        <Text style={gStyle.text} >Reset last timer for next (on/off):</Text>
                        <MainSwitch value={false} changeFunction={resetLTimerSwitchHandle} />

                        <Text style={gStyle.text} >Lock buttons before starting the system (on/off):</Text>
                        <MainSwitch value={false} changeFunction={lockButtonsSwitchHandle} />

                        <MainButton title='Begin' pressFunction={beginButtonHandle} />
                    </View>
                );
            }} />
        </SafeAreaView>
    );
};

export default Host;
