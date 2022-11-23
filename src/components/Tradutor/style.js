import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({    
  containerMain: {
    width: "100%",
    height: "100%",
    backgroundColor: '#001220',
  },
  containerDados:{
    backgroundColor: '#fff',
    width: "80%",
    height: "60%",
    borderRadius: 40,
    marginLeft: 40,
    marginBottom: 40,
    //alignItems: 'flex-start',
    paddingTop:8,
    paddingLeft: 32
  },
  textDados:{
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10
  }
});

export default styles