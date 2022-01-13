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
                    options={{title: "Начало", orientation: 'portrait'}}
                    />

                <Stack.Screen 
                    name="host"
                    component={Host}
                    options={{title: "Ведущий"}}
                    />
                
                <Stack.Screen 
                    name="player"
                    component={Player}
                    options={{title: "Игрок"}}
                    />

                <Stack.Screen 
                    name="playerButton"
                    component={PlayerButton}
                    options={{title: "Кнопка"}}
                    />
                
                <Stack.Screen 
                    name="hostSystem"
                    component={HostSystem}
                    options={{title: "Система"}}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigate;
