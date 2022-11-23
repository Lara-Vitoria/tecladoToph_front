import React, { Component, useState } from "react";
import { View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    KeyboardAvoidingView,
    Modal, 
    Pressable } from "react-native";

import styles from './style';
import Logo from '../Logo';
import Footer from "../Footer";

const API_URL = 'http://192.168.29.112:3000/v1';

function input(placeholder, change) {
    return (
        <TextInput
            style={styles.formInput}
            placeholder={placeholder}
            onChangeText={change}
            keyboardType="text" />
    );
}

function btn(funcao, texto) {
    return (
        <TouchableOpacity
            style={styles.btn}
            title={texto}
            onPress={funcao}>
            <Text style={styles.textBtn}>{texto}</Text>
        </TouchableOpacity>
    );
}

const Cadastro = (props) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const onCadastro = () => {
        const dados = {
            usuario: {
                email: email,
                senha: senha,
            }
        };

        if (senha !== confirmaSenha) {
            setIsError(true);
            setMessage('Senhas diferentes!');
            setModalVisible(true)
            return;
        }

        fetch(`${API_URL}/usuarios/cadastro`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados)
        }).then(res => {
            try {
                if (res.status !== 201) {
                    setIsError(true);
                    setMessage('Erro ao realizar o cadastro');
                } else {
                    setIsError(false);
                    setMessage('Cadastro realizado com sucesso!');
                }
                setModalVisible(true)
            } catch (err) {
                setModalVisible(true)
                console.log(err);
            };
        }).catch(err => { console.log(err) });
    };

    const getMessage = () => {
        const status = isError ? `Erro: ` : `Sucesso: `;
        return status + message;
    }

    function retornaModal() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible); }}
            >
                <View style={styles.modalView}>
                    <Text style={styles.mensagem}>{message ? getMessage() : null}</Text>

                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {
                            setModalVisible(!modalVisible)
                            isError ? null : props.navigation.navigate('Main')
                        }}
                    >
                        <Text style={styles.btnText}>Fechar</Text>
                    </Pressable>
                </View>
            </Modal>
        );
    }

        return (
            <View style={styles.containerMain}>
                <Logo />
                <View style={styles.form}>
                    
                    <KeyboardAvoidingView behavior="padding">

                        {input("Email", setEmail)}
                        {input("Senha", setSenha)}
                        {input("Confirme a senha", setConfirmaSenha)}

                        {btn(onCadastro, 'Cadastro')}

                        {retornaModal()}

                        <Footer />

                    </KeyboardAvoidingView>
                </View>
            </View>
        );
}

export default Cadastro;