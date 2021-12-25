import { StyleSheet } from "react-native";

export const gStyle = StyleSheet.create({
    screen: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },

    text: {
        fontSize: 36,
    },

    menuButton: {
        backgroundColor: "#E6E6E6",
        borderRadius: 100,
        width: 300,
        height: 100,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
          width: 3,
          height: 3
        },
        elevation: 10,
        shadowOpacity: 0.21,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },

    buttonText: {
        fontSize: 24
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

    display: {
        width: 300, 
        height: 300
    }
});
