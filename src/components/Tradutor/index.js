import React, { Component } from "react";
import { View } from "react-native";

import styles from './style';
import Footer from "../Footer";
import Header from "../Header";

export default class Tradutor extends Component {
    render() {
        return (
            <View style={styles.containerMain}>
                <Header />
                <Footer />
            </View>
        )
    };
}