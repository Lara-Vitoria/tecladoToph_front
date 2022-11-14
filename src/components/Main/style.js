import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        width: "100%",
        backgroundColor: '#001220'
      },
    textBtn: {
        fontSize: 20,
        color: '#fff',
    },
    btn: {
        borderRadius: 50,
        alignItems: 'center',
        width: "90%",
        backgroundColor: "#20CA26",
        
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 90,
    },
    containerBtn: {
        justifyContent: 'center',
        top: -200,
        padding: 10,
    },
});

export default styles