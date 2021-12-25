import React from 'react';
import Main from './components/screens/Main';
import Host from './components/screens/Host';
import Player from './components/screens/Player'
import PlayerButton from './components/screens/PlayerButton';
import HostSystem from './components/screens/HostSystem';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Navigate = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="main"
                    component={Main}
                    options={{title: "Main", orientation: 'portrait'}}
                    />

                <Stack.Screen 
                    name="host"
                    component={Host}
                    options={{title: "Host"}}
                    />
                
                <Stack.Screen 
                    name="player"
                    component={Player}
                    options={{title: "Player"}}
                    />

                <Stack.Screen 
                    name="playerButton"
                    component={PlayerButton}
                    options={{title: "Button"}}
                    />
                
                <Stack.Screen 
                    name="hostSystem"
                    component={HostSystem}
                    options={{title: "System"}}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigate;
