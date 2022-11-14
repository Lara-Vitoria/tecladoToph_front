import React, { Component } from "react";
import { View, Text } from "react-native";

import Footer from "../Footer";
import Header from "../Header";

import styles from './style';

export default class Guia extends Component {
    render() {
        return (
            <View style={styles.containerMain}>
                <Header />
                <Footer />
            </View>
        )
    };
}