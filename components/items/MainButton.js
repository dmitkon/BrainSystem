import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { gStyle } from '../../styles/GeneralStyles';

const MainButton = (props) => {
    return(
        <TouchableOpacity style={gStyle.menuButton} onPress={props.pressFunction} >
            <Text style={gStyle.buttonText} >{props.title}</Text>
        </TouchableOpacity>
    );
};

export default MainButton;
