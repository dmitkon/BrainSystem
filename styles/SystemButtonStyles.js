import { StyleSheet } from 'react-native';

export const systemButtonStyles = StyleSheet.create({
    systemButton: {
        backgroundColor: '#E6E6E6',
        borderRadius: 100,
        width: 100,
        height: 100,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
          width: 3,
          height: 3
        },
        elevation: 5,
        shadowOpacity: 0.21,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },

    icon: {
        color: "rgba(128,128,128,1)",
        fontSize: 50
    }
});