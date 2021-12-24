import React from 'react';
import Main from './components/screens/Main';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator();

const Navigate = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Main"
                    component={Main}
                    options={{title: "Main"}}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigate;
