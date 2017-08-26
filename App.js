import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import StartScreen from './components/StartScreen'

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" component={StartScreen} />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
