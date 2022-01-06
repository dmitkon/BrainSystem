import React from 'react';
import { TouchableOpacity } from 'react-native';
import { systemButtonStyles } from '../../styles/SystemButtonStyles';
import Icon from 'react-native-vector-icons/Entypo';

const SystemButton = (props) => {
    return(
        <TouchableOpacity style={systemButtonStyles.systemButton} onPress={props.pressFunction} >
            <Icon name={props.nameIcon} style={systemButtonStyles.icon}/>
        </TouchableOpacity>
    );
};

export default SystemButton;
