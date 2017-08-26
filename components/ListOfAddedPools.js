import React, { Component } from 'react';
import PoolWidget from './PoolWidget';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class ListOfAddedPools extends Component {

  listOfPools = () => {
    const listOfPools = [
      {
        poolName: 'ethermine.org',
        poolUrl: 'https://api.ethermine.org',
        minerAddress: '333634a4b647ff2bec35733c365394e18f7d1b7c',
      },
      {
        poolName: 'etc.ethermine.org',
        poolUrl: 'https://api-etc.ethermine.org',
        minerAddress: '1fa999aef1e00eb4177df5e323452b045d42f852',
      }
    ];
    return listOfPools.map((pool) => {
      return <PoolWidget pool={pool} key={pool.minerAddress}/>
    });
  }
  render() {

    return (
      <View style={styles.container}>
        {this.listOfPools()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
