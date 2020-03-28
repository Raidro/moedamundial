import React, { Component } from 'react';

//importes dos componentes do  Native Base
import {
    Container,
    Text,
    Picker,
    Content,
    H1,
    Separator,
    ListItem,
    Button
} from "native-base";
import { StyleSheet } from 'react-native';

//importes de style
// import { Container } from './styles';

export default class tela_principal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: "SELECIONE UMA MOEDA"
        };
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    render() {
        return (
            <Container style={styles.container}>

                <H1 style={styles.title}>
                    World Coins
                    </H1>
                <Text>________________________________</Text>

                <Text style={styles.subtittle}>
                    Selecione uma moeda:
                    </Text>
                <Content>
                    <Picker
                        mode="dropdown"
                        style={styles.pickers}
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}
                    >
                        <Picker.Item label="SELECIONE UMA MOEDA" value="SELECIONE UMA MOEDA" />
                        <Picker.Item label="USD - DOLAR COMERCIAL" value="USD - DOLAR COMERCIAL" />
                        <Picker.Item label="USDT - DOLAR TURISMO" value="USDT - DOLAR TURISMO" />
                        <Picker.Item label="CAD - DOLAR CANADENSE" value="CAD - DOLAR CANADENSE" />
                        <Picker.Item label="AUD - DOLAR AUTRALIANO" value="AUD - DOLAR AUTRALIANO" />
                        <Picker.Item label="GBP - LIBRA ESTERLINA" value="GBP - LIBRA ESTERLINA" />
                        <Picker.Item label="ARS - PESO ARGENTINO" value="ARS - PESO ARGENTINO" />
                        <Picker.Item label="JPY - IENE JAPONES" value="JPY - IENE JAPONES" />
                        <Picker.Item label="CHF - FRENCO SUIÇO" value="CHF - FRENCO SUIÇO" />
                        <Picker.Item label="CNY - YUAN CHINES" value="CNY - YUAN CHINES" />
                        <Picker.Item label="YLS - NOVO SHEKEL ISRAELENSE" value="YLS - NOVO SHEKEL ISRAELENSE" />
                        <Picker.Item label="BCT - BITCOIN" value="BCT - BITCOIN" />
                        <Picker.Item label="LCT - LITECOIN" value="LCT - LITECOIN" />
                        <Picker.Item label="ETH - ETHEREUM" value="ETH - ETHEREUM" />
                        <Picker.Item label="XRP - RIPPLE" value="XRP - RIPPLE" />
                    </Picker>

                    <Separator bordered>
                        <Text>Moeda: {this.state.selected}</Text>
                    </Separator>
                    <ListItem>
                        <Text>Compra: </Text>
                    </ListItem>

                    <ListItem>
                        <Text>Venda: </Text>
                    </ListItem>

                    <ListItem>
                        <Text>Variação: </Text>
                    </ListItem>

                    <ListItem>
                        <Text>Variação(%): </Text>
                    </ListItem>

                    <ListItem>
                        <Text>Maximo: </Text>
                    </ListItem>

                    <ListItem last>
                        <Text>Minimo</Text>
                    </ListItem>

                    <Button info>
                        <Text style={styles.text}> Por Periodo </Text>
                    </Button>

                    <Button info style={styles.espaceButton}>
                        <Text style={styles.text2}> Listar Todas </Text>
                    </Button>

                </Content>


            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        marginTop: 50,
        fontSize: 30,
        color: 'black',

    },

    subtittle: {
        marginTop: 15,
        color: 'black',

    },
    pickers: {
        width: 220,
        marginTop: 10
    },
    text: {
        marginLeft: 45

    },
    text2: {
        marginLeft: 45

    },
    espaceButton: {
        marginTop: 15
    }
});


