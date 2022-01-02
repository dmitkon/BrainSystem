import { StyleSheet } from 'react-native';

export const mainSwitchStyle = StyleSheet.create({
    switch: {
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
        margin: 10
    },

    falseColor: '#f44336',
    trueColor: '#4caf50',
    disabledColor: '#f0f0f0',
    thumbColor: '#E6E6E6',

    container: {
        alignItems: 'center',
        flexDirection: 'row',
    },

    text: {
        fontSize: 18
    },

});
