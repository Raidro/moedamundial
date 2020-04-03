import React, { Component } from 'react';
import api from '../../api/api.js';

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
            minimo: "",


        };
    }
    onValueChange(value) {
        this.setState({
            selected: value,
            nome: this.state.nome,
            compra: this.state.compra,
            venda: this.state.venda,
            variacao: this.state.variacao,
            variacao_porcentagem: this.state.variacao_porcentagem,
            maximo: this.state.maximo,
            minimo: this.state.minimo,

        });
    }

    buscaMoeda = async (valor) => {
        await api.get(`/${valor}`)
            .then(res => {                               
                this.state.nome = res.data["0"]["name"]
                this.state.compra = res.data["0"]["bid"]
                this.state.venda = res.data["0"]["ask"]
                this.state.variacao =res.data["0"]["varBid"]
                this.state.variacao_porcentagem =res.data["0"]["pctChange"]
                this.state.maximo =res.data["0"]["high"]
                this.state.minimo =res.data["0"]["low"]
                

            })

    };


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
                        <Picker.Item label="USDT - DOLAR TURISMO" value="USDT-BRL" />
                        <Picker.Item label="CAD - DOLAR CANADENSE" value="CAD-BRL" />
                        <Picker.Item label="AUD - DOLAR AUTRALIANO" value="AUD-BRL" />
                        <Picker.Item label="GBP - LIBRA ESTERLINA" value="GBP-BRL" />
                        <Picker.Item label="ARS - PESO ARGENTINO" value="ARS-BRL" />
                        <Picker.Item label="JPY - IENE JAPONES" value="JPY-BRL" />
                        <Picker.Item label="CHF - FRENCO SUIÇO" value="CHF-BRL" />
                        <Picker.Item label="CNY - YUAN CHINES" value="CNY-BRL" />
                        <Picker.Item label="YLS - NOVO SHEKEL ISRAELENSE" value="YLS-BRL" />
                        <Picker.Item label="BTC - BITCOIN" value="BTC-BRL" />
                        <Picker.Item label="LTC - LITECOIN" value="LTC-BRL" />
                        <Picker.Item label="ETH - ETHEREUM" value="ETH-BRL" />
                        <Picker.Item label="XRP - RIPPLE" value="XRP-BRL" />
                    </Picker>

                    <Separator bordered>
                        {/*   <Text>Moeda: {this.state.selected}</Text>*/}
                        <Text>Moeda: {this.state.nome}</Text>

                    </Separator>
                    <ListItem>
                        <Text>Compra:{this.state.compra} </Text>
                    </ListItem>

                    <ListItem>
                        <Text>Venda:{this.state.venda} </Text>
                    </ListItem>

                    <ListItem>
                        <Text>Variação:{this.state.variacao} </Text>
                    </ListItem>

                    <ListItem>
                        <Text>Variação(%): {this.state.variacao_porcentagem}</Text>
                    </ListItem>

                    <ListItem>
                        <Text>Maximo:{this.state.maximo} </Text>
                    </ListItem>

                    <ListItem last>
                        <Text>Minimo: {this.state.minimo}</Text>
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
    }
});


