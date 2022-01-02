import React from 'react';
import { Text, SafeAreaView } from 'react-native';

const PlayerButton = ({route}) => {
    return(
        <SafeAreaView>
            <Text>Hello {route.params.playerName}!</Text>
        </SafeAreaView>
    );
};

export default PlayerButton;
