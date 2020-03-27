import React, { Component } from 'react';
import { View, Text } from 'react-native';

//importes dos componentes do  Native Base
import { Container, Header, Content, Title } from "native-base";

//importes de style
// import { Container } from './styles';

export default class tela_principal extends Component {
  render() {
    return (
        <Container>
            <Header>
                <Title>Teste</Title>
            </Header>
        </Container>
    );
  }
}
