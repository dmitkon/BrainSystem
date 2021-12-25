import React from 'react';
import { View, Text } from 'react-native';

const PlayerButton = ({route}) => {
    return(
        <View>
            <Text>Hello {route.params.playerName}!</Text>
        </View>
    );
};

export default PlayerButton;
