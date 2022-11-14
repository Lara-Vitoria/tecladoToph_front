import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './src/components/Main';
import Tradutor from './src/components/Tradutor';
import Guia from './src/components/Guia';
import Login from './src/components/Login';
import Cadastro from './src/components/Cadastro';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions:{
      title: '',
      headerStyle: {
        backgroundColor: "#20ca26"
      },
      headerTintColor: '#fff',
      //headerShown: false,
    }
  },
  Cadastro: {
    screen: Cadastro,
    navigationOptions:{
      title: '',
      headerStyle: {
        backgroundColor: "#20ca26"
      },
      //headerShown: false,
    }
  },
  Main: {
    screen: Main,
    navigationOptions:{
      title: '',
      headerStyle: {
        backgroundColor: "#20ca26"
      },
      headerTintColor: '#fff',
    }
  },
  Tradutor: {
    screen: Tradutor,
    navigationOptions:{
      title: '',
      headerStyle: {
        backgroundColor: "#20ca26"
      },
      headerTintColor: '#fff',
    }
  },
  Guia: {
    screen: Guia,
    navigationOptions:{
      title: '',
      headerStyle: {
        backgroundColor: "#20ca26"
      },
      headerTintColor: '#fff',
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);