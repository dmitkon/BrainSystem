import React, { useState } from 'react';
import { Text, TextInput, SafeAreaView, Alert } from 'react-native';
import { cancelDiscovery, startDiscovery } from '../../src/android/Bluetooth';
import { gStyle } from '../../styles/GeneralStyles';
import DevicesList from '../items/DevicesList';
import MainButton from '../items/MainButton';

const Player = ({navigation}) => {
    const loadScreen = (screen) => {
        navigation.navigate(screen, { playerName });
    };

    const [playerName, setPlayerName] = useState("");   
    const [devices, setDevices] = useState([]);

    const beginDiscovery = () => {
        cancelDiscovery().then((cancel) => {
            if (!cancel)
                startDiscovery().then((result) => {
                    if (result.granted)
                        setDevices(result.devices)
                    else
                        Alert.alert("Ошибка поиска", "Посик недоступен, требуется разрешить доступ к точному местоположению", [{text: "OK"}]);
                })
            else
                Alert.alert("Предупреждение", "Посик остановлен", [{text: "OK"}]);
        });
    };

    const onChange = (playerName) => {
        setPlayerName(playerName);
    };

    const checkCorrectConfig = (playerName) => {
        let errorMsg = "OK";

        if (playerName == "")
            errorMsg = "Вы забыли указать имя!" + "\n";

        return errorMsg;
    };

    const beginHandle = () => {
        let errorMsg = checkCorrectConfig(playerName);

        if (errorMsg == "OK")
            loadScreen('playerButton')
        else
            Alert.alert("Ошибка конфигурации игрока", errorMsg, [{text: "OK"}]);
    };

    return (
        <SafeAreaView style={gStyle.screen}>
            <Text style={gStyle.text}>Имя:</Text>
            <TextInput style={gStyle.input} onChangeText={onChange} />
            <DevicesList data={devices} style={gStyle.text} itemPress={beginHandle} />

            <MainButton title={"Начать/остановить" + "\n" + "поиск систем"} onPress={beginDiscovery}/>
        </SafeAreaView>
    );
};

export default Player;
