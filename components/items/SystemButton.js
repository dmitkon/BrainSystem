import React from 'react';
import { TouchableOpacity } from 'react-native';
import { systemButtonStyles } from '../../styles/SystemButtonStyles'
import Icon from 'react-native-vector-icons/Entypo'
import { gStyle } from '../../styles/GeneralStyles';

const SystemButton = (props) => {
    return(
        <TouchableOpacity style={systemButtonStyles.mainButton} onPress={props.pressFunction} >
            <Icon name='arrow-right' style={gStyle.icon}/>
        </TouchableOpacity>
    );
};

export default SystemButton;
