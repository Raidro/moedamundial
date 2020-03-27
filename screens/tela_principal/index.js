import React, { Component,  } from 'react';

//importes dos componentes do  Native Base
import { Container, Header, Title, Body,Text } from "native-base";

//importes de style
// import { Container } from './styles';

export default class tela_principal extends Component {
    render() {
        return (
            <Container>
               <Text style={{marginTop: 50, fontSize: 30, color:'black'}}>
                   World Coins
               </Text> 
            </Container>
        );
    }
}


