import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import Navigator from './navigation/navigator.js'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false
    }
  }

  componentDidMount = async () => {
    await Font.loadAsync({
      'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf')
    })
    this.setState({ 
      fontLoaded: true 
    })
  }

  render() {
    return (
      <View style={styles.container}>        
        
        { this.state.fontLoaded ? <Navigator /> : <Text> Teste2</Text> }

      </View>
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
});
