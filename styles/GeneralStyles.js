import { StyleSheet } from 'react-native';

export const gStyle = StyleSheet.create({
    screen: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },

    text: {
        fontSize: 24,
        color: 'black'
    },

    input: {
        width: 300,
        height: 60,
        margin: 10,
        borderWidth: 1,
        padding: 15,
        fontSize: 24,
        borderRadius: 100,
    },

    brainDisplay: {
        width: 300, 
        height: 300
    },

    brainTitle: {
        fontSize: 36,
        color: 'black'
    }
});
