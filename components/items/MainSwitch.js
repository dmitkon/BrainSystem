import React, { useState } from 'react';
import { Text, Switch, View } from 'react-native';
import { mainSwitchStyle } from '../../styles/MainSwitchStyles';

const MainSwitch = (props) => {
    const [switchValue, setSwitchValue] = useState(props.value);

    const onChangeSwitchValue = () => {
        setSwitchValue(!switchValue);
        props.changeFunction();
    };

    return(
        <View style={mainSwitchStyle.container}>
            <Text style={mainSwitchStyle.text} >{switchValue ? 'ON' : 'OFF'}</Text>
            <Switch 
                style={mainSwitchStyle.switch} 
                value={switchValue} 
                onValueChange={onChangeSwitchValue} 
                trackColor={{false: mainSwitchStyle.falseColor, true: mainSwitchStyle.trueColor}} 
                thumbColor={mainSwitchStyle.thumbColor} />
        </View>
    );
};

export default MainSwitch;