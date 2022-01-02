import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { mainButtonStyles } from '../../styles/MainButtonStyles';

const MainButton = (props) => {
    return(
        <TouchableOpacity style={mainButtonStyles.mainButton} onPress={props.pressFunction} >
            <Text style={mainButtonStyles.buttonText} >{props.title}</Text>
        </TouchableOpacity>
    );
};

export default MainButton;
