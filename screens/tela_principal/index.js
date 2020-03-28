import React, { Component } from 'react';

//importes dos componentes do  Native Base
import { Container, Text, Picker, Content, Subtitle, H1, H4 } from "native-base";
import { StyleSheet } from 'react-native';

//importes de style
// import { Container } from './styles';

export default class tela_principal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: "key0"
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
                        <Picker.Item label="SELECIONE UMA MOEDA" value="key0" />
                        <Picker.Item label="USD - DOLAR COMERCIAL" value="key1" />
                        <Picker.Item label="USDT - DOLAR TURISMO" value="key2" />
                        <Picker.Item label="CAD - DOLAR CANADENSE" value="key3" />
                        <Picker.Item label="AUD - DOLAR AUTRALIANO" value="key4" />
                        <Picker.Item label="GBP - LIBRA ESTERLINA" value="key5" />
                        <Picker.Item label="ARS - PESO ARGENTINO" value="key6" />
                        <Picker.Item label="JPY - IENE JAPONES" value="key7" />
                        <Picker.Item label="CHF - FRENCO SUIÇO" value="key8" />
                        <Picker.Item label="CNY - YUAN CHINES" value="key9" />
                        <Picker.Item label="YLS - NOVO SHEKEL ISRAELENSE" value="key10" />
                        <Picker.Item label="BCT - BITCOIN" value="key11" />
                        <Picker.Item label="LCT - LITECOIN" value="key12" />
                        <Picker.Item label="ETH - ETHEREUM" value="key13" />
                        <Picker.Item label="XRP - RIPPLE" value="key14" />



                    </Picker>
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
        marginTop: 30,
        color: 'black',

    },
    pickers: {
        width: 220,
        marginTop: 50
    }
});


