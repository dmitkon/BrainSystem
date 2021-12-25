import React from 'react';
import { View, Text } from 'react-native';

const HostSystem = ({route}) => {
    return(
        <View>
            <Text>Hello {route.params.hostName}!</Text>
        </View>
    );
};

export default HostSystem;
