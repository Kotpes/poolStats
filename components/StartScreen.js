import React, { Component } from 'react';
import ListOfAddedPools from './ListOfAddedPools';

import {
  View,
  Text,
  StyleSheet,
  Picker,
} from 'react-native';

export default class StartScreen extends Component {
  state = {}
  render() {
    return (
      <View style={styles.container}>
        <ListOfAddedPools />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    top: 20,
    padding: 20,
  },
  items: {
    fontSize: 30,
  },
  heading: {
    fontSize: 40,
  }
});
