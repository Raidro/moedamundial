import React, { Component } from 'react';
import api from '../../api/api.js';

//importes dos componentes do  Native Base
import {
    Container,
    Text,
    Picker,
    Content,
    H1,
    Button,
    Card,
    CardItem,
    Body
} from "native-base";

import { StyleSheet } from 'react-native';

console.disableYellowBox = true

export default class tela_principal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: "USD-BRL",
            nome: "",
            compra: "",
            venda: "",
            variacao: "",
            variacao_porcentagem: "",
            maximo: "",
            minimo: ""

        };
    }


    componentDidMount = async () => {

        this.buscaMoeda(this.state.selected)


    }

    onValueChange(value) {

        this.setState({
            selected: value,
        });

        this.buscaMoeda(value)

    }


    /* buscaMoeda = async (valor) => {
         await api.get(`/${valor}`)
             .then(res => {
                 this.state.nome = res.data["0"]["name"]
                 this.state.compra = res.data["0"]["bid"]
                 this.state.venda = res.data["0"]["ask"]
                 this.state.variacao = res.data["0"]["varBid"]
                 this.state.variacao_porcentagem = res.data["0"]["pctChange"]
                 this.state.maximo = res.data["0"]["high"]
                 this.state.minimo = res.data["0"]["low"]
             })
     }*/

    buscaMoeda = async (valor) => {
        await api.get(`/${valor}`)
            .then(res => {
                this.setState({
                    nome: res.data["0"]["name"],
                    compra: res.data["0"]["bid"],
                    venda: res.data["0"]["ask"],
                    variacao: res.data["0"]["varBid"],
                    variacao_porcentagem: res.data["0"]["pctChange"],
                    maximo: res.data["0"]["high"],
                    minimo: res.data["0"]["low"]
                })

            })
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
                        //selectedValue={this.state.selected}
                        selectedValue={this.buscaMoeda(this.state.selected)}
                        onValueChange={this.onValueChange.bind(this)}

                    >
                        <Picker.Item label="SELECIONE UMA MOEDA" value="SELECIONE UMA MOEDA" />
                        <Picker.Item label="USD - DOLAR COMERCIAL" value="USD-BRL" />
                        <Picker.Item label="USDT - DOLAR TURISTICO" value="USDT-BRL" />
                        <Picker.Item label="CAD - DOLAR CANADENSE" value="CAD-BRL" />
                        <Picker.Item label="AUD - DOLAR AUTRALIANO" value="AUD-BRL" />
                        <Picker.Item label="GBP - LIBRA ESTERLINA" value="GBP-BRL" />
                        <Picker.Item label="ARS - PESO ARGENTINO" value="ARS-BRL" />
                        <Picker.Item label="JPY - IENE JAPONES" value="JPY-BRL" />
                        <Picker.Item label="CHF - FRENCO SUIÇO" value="CHF-BRL" />
                        <Picker.Item label="CNY - YUAN CHINES" value="CNY-BRL" />
                        <Picker.Item label="BTC - BITCOIN" value="BTC-BRL" />
                        <Picker.Item label="LTC - LITECOIN" value="LTC-BRL" />
                        <Picker.Item label="ETH - ETHEREUM" value="ETH-BRL" />
                        <Picker.Item label="XRP - RIPPLE" value="XRP-BRL" />
                    </Picker>

                    <Card>
                        <CardItem header bordered>
                            <Text>{this.state.nome}</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Compra: {this.state.compra}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Venda: {this.state.venda}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação: {this.state.variacao}
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação(%): {this.state.variacao_porcentagem}
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Maximo: {this.state.maximo}
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Minimo: {this.state.minimo}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Button info style={styles.button}>
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
        marginTop: 40,
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
    },
    button: {
        marginTop: 10
    }
});


