import React, { Component, useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";

import styles from './style';
import Footer from "../Footer";
import Header from "../Header";

const API_URL = 'http://192.168.29.112:3000/v1';

function retornaDados(item) {
    return (
        <Text style={styles.textDados}>{item.dados}</Text>
    );
}

const Tradutor = (props) => {

    let idUsuario = props.navigation.getParam('id');
    const [dados, setDados] = useState([]);

    //console.log(props.navigation.params);
    useEffect(() => {
        fetch(`${API_URL}/dados/usuario/${idUsuario}`, { method: 'GET' })
            .then((response) => response.json())
            .then((responseJson) => {
                setDados(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    });

    return (
        <View style={styles.containerMain}>
            <Header />
                <FlatList
                style={styles.containerDados}
                    data={dados}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => retornaDados(item)}

                />

        </View>
    )
}

export default Tradutor;