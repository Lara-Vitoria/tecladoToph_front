import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#001220'
    },
    form: {
        width: "100%",
        marginTop: 60,
        padding: 10,
    },
    formInput: {
        width: "90%",
        borderRadius: 50,
        margin: 12,
        marginBottom: 24,
        padding: 8,
        paddingLeft: 16,
        backgroundColor: '#f6f6f6',
    },
    textBtn: {
        fontSize: 20,
        color: '#fff',
    },
    btn: {
        borderRadius: 50,
        alignItems: 'center',
        width: "70%",
        backgroundColor: "#20CA26",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 60,
        marginTop: 60,
    },
    modalView: {
        margin: 20,
        top: 300,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        width: '100%',
        padding: 10,
        marginTop: 10,
        elevation: 2,
        backgroundColor: "#20CA26",
        alignItems: 'center'
      },
      btnText:{
        color: "#fff",
        
      }
    
});

export default styles