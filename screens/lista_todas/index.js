import React, { Component } from 'react';

import api from '../../api/api.js';

import {
    Container,
    Text,
    Content,
    H1,
    Card,
    CardItem,
    Body

} from "native-base";
import { StyleSheet } from 'react-native';



export default class lista_todas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: "all",
            listaTodasMoedas: [],
        };
    }

    componentDidMount = async () => {

        this.buscaTodasMoeda(this.state.selected)


    }

    buscaTodasMoeda = async (valor) => {
        await api.get(`/${valor}`)
            .then(res => {

                console.log(Object.values(res.data))

                this.setState({
                    listaTodasMoedas: Object.values(res.data)
                })

            })
    }

    render() {
        return (
            <Container style={styles.container}>

                <H1 style={styles.title}>World Coins</H1>
                <Text>________________________________</Text>
                <Text style={styles.subtittle}>Lista de toda as moedas:</Text>

                <Content>

                    {this.state.listaTodasMoedas.map((listaTodasMoedas, index) =>
                        <Card key={index}>
                            <CardItem header bordered>
                                <Text>{listaTodasMoedas.name}                          </Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text>
                                        Compra: {listaTodasMoedas.bid}
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text>
                                        Venda: {listaTodasMoedas.ask}
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text>
                                        Variação: {listaTodasMoedas.varBid}
                                    </Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                    <Text>
                                        Variação(%): {listaTodasMoedas.pctChange}
                                    </Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                    <Text>
                                        Maximo: {listaTodasMoedas.high}
                                    </Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                    <Text>
                                        Minimo: {listaTodasMoedas.low}
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    )}

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

});
