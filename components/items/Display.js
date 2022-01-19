import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { displayStyle } from '../../styles/DisplayStyles';

const Display = (props) => {
    return (
        <View style={[displayStyle.display, {backgroundColor: props.light}]}>
            <Text style={displayStyle.text}>{props.status}</Text>
        </View>
    );
};

export default Display;
