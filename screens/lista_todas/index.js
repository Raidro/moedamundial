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
    Button
} from "native-base";
import { StyleSheet } from 'react-native';


export default class lista_todas extends Component {
    render() {
        return (
            <Container style={styles.container}>

                <H1 style={styles.title}>World Coins</H1>
                <Text>________________________________</Text>
                <Text style={styles.subtittle}>Lista de toda as moedas:</Text>

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
