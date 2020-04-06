import React, { Component } from 'react';

import { View } from 'react-native';
import api from '../../api/api.js';

import {
    Container,
    Text,
    Picker,
    Content,
    H1,
    Separator,
    ListItem,
    Button,
    List,
    Card,
    CardItem,
    Body
    
} from "native-base";
import { StyleSheet } from 'react-native';



export default class lista_todas extends Component {





    render() {
        return (
            <Container style={styles.container}>

                <H1 style={styles.title}>World Coins</H1>
                <Text>________________________________</Text>
                <Text style={styles.subtittle}>Lista de toda as moedas:</Text>

                <Content>

                    <Card>
                        <CardItem header bordered>
                            <Text>USD - DOLAR COMERCIAL                        </Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Compra:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Venda:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação(%):
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Maximo:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Minimo:
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text>USDT - DOLAR TURISTICO                        </Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Compra:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Venda:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação(%):
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Maximo:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Minimo:
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text>CAD - DOLAR CANADENSE                        </Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Compra:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Venda:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação(%):
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Maximo:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Minimo:
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text>AUD - DOLAR AUTRALIANO                        </Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Compra:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Venda:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação(%):
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Maximo:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Minimo:
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text>GBP - LIBRA ESTERLINA                        </Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Compra:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Venda:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação(%):
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Maximo:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Minimo:
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text>ARS - PESO ARGENTINO                        </Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Compra:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Venda:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação(%):
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Maximo:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Minimo:
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text>JPY - IENE JAPONES                        </Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Compra:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Venda:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação(%):
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Maximo:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Minimo:
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text>CHF - FRENCO SUIÇO                        </Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Compra:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Venda:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação(%):
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Maximo:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Minimo:
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text>CNY - YUAN CHINES                        </Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Compra:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Venda:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação(%):
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Maximo:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Minimo:
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text>BTC - BITCOIN                        </Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Compra:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Venda:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação(%):
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Maximo:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Minimo:
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text>LTC - LITECOIN                        </Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Compra:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Venda:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação(%):
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Maximo:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Minimo:
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text>ETH - ETHEREUM                        </Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Compra:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Venda:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação(%):
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Maximo:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Minimo:
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text>XRP - RIPPLE                        </Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Compra:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Venda:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Variação(%):
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Maximo:
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Minimo:
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>



                    
                    

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
