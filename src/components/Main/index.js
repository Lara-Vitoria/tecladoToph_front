import React, { Component } from "react";
import { View, Text, TouchableOpacity} from "react-native";

import Footer from "../Footer";
import Header from "../Header";
import styles from './style';

export default class Main extends Component {
    render() {
    return(
        <View style={styles.containerMain}>
            <Header />
            <View style={styles.containerBtn}>
                <TouchableOpacity
                    style={styles.btn}
                    title="Tradutor"
                    onPress={() => this.props.navigation.navigate('Tradutor')}>
                    <Text style={styles.textBtn}>Tradutor</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.btn}
                    title="Guia"
                    onPress={() => this.props.navigation.navigate('Guia')}>
                    <Text style={styles.textBtn}>Guia</Text>
                </TouchableOpacity>
            </View>
            <Footer />
        </View>
    );
}}
