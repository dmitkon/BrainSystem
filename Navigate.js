import React from 'react';
import Main from './components/screens/Main';
import Host from './components/screens/Host';
import Player from './components/screens/Player'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator();

const Navigate = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="main"
                    component={Main}
                    options={{title: "Main"}}
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigate;
