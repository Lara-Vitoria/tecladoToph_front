import React, { useState } from "react";
import { Modal, 
    Pressable,
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    KeyboardAvoidingView } from "react-native";

import Svg, { Path } from 'react-native-svg';

import styles from './style';
import Logo from '../Logo';

const API_URL = 'http://192.168.0.101:3000/v1';

function detalhe(props) {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => props.navigation.navigate('Cadastro')}
            style={styles.detalhe}>

            <Svg
                width="500"
                height="500"
            >
                <Path d="M74.394,635.852S64.6,515.534,98.178,
                                449.778s122.945-52.845,141.284-55.047c11.17-1.341-4.106,4.955,
                                1.447,0,.523-.466,134.421-3.547,200.929-45.945s65.1-123.649,
                                65.1-123.649V635.852Z"
                    transform="translate(-73.065 -225.137)"
                    fill="#20ca26"
                />

                <Text style={styles.textCadastro}>Não possui conta?</Text>
                <Text style={styles.linkCadastro}>Cadastre-se aqui</Text>
            </Svg>
        </TouchableOpacity>
    );
}

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
const  Login = (props) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const onLogin = () => {
        const dados = {
            usuario: {
                senha: senha,
                email: email,
            }
        };

        fetch(`${API_URL}/usuarios/login`, {
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
                    setMessage('Erro ao realizar ao logar');
                    setModalVisible(true)
                } else {
                    props.navigation.navigate('Main');
                }
                
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
                        onPress={() => setModalVisible(!modalVisible)}
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

                <View style={styles.formContext}>
                    <View style={styles.form}>
                        <KeyboardAvoidingView behavior="padding">
                            
                            {input("Email", setEmail)}
                            {input("Senha", setSenha)}

                            {btn(onLogin, 'Entrar')}

                            {retornaModal()}

                            {detalhe(props)}

                        </KeyboardAvoidingView>
                    </View>
                </View>
            </View>
        );
}

export default Login;