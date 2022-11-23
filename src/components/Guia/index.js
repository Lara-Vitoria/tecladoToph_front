import React, { Component } from "react";
import { View, Text, Image, ScrollView  } from "react-native";

import Header from "../Header";

import styles from './style';

function retarnaImg() {
    return (
            <ScrollView>
            <Image style={styles.letra} source={require('../Uteis/img/ac.png')} />
            <Image style={styles.letra} source={require('../Uteis/img/df.png')} />
            <Image style={styles.letra} source={require('../Uteis/img/gi.png')} />
            <Image style={styles.letra} source={require('../Uteis/img/jl.png')} />
            <Image style={styles.letra} source={require('../Uteis/img/mo.png')} />
            <Image style={styles.letra} source={require('../Uteis/img/pr.png')} />
            <Image style={styles.letraUlt} source={require('../Uteis/img/yz.png')} />
        </ScrollView >
        
    );
}
export default class Guia extends Component {
    render() {
        return (
            <View style={styles.containerMain}>
                <Header />

                <View style={styles.conteudo}>
                    {retarnaImg()}
                </View>
                
            </View>
        )
    };
}