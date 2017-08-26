import React, { Component } from 'react';
import axios from 'axios';
import {round, devide} from 'lodash';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class PoolWidget extends Component {
  state = {
    pool: this.props.pool,
    loaded: false,
  }

  componentDidMount() {
    this.getEthPoolData();
  }

  getEthPoolData = () => {
    const {pool: {minerAddress, poolUrl}} = this.state

    axios.get(`${poolUrl}/miner/${minerAddress}/currentStats`)
      .then((response) => {
        this.setState({
          poolData: response.data.data,
          loaded: true,
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (!this.state.loaded) {
      return (
        <View>
          <Text>
            Loading...
          </Text>
        </View>
      )
    }
    const {pool: {poolName, minerAddress}, poolData} =this.state
    const {reportedHashrate, currentHashrate, averageHashrate, validShares, unpaid} = poolData
    const reportedHashRateRound = round((reportedHashrate / 1000000), 2)
    const currentHashrateRound = round((currentHashrate / 1000000), 2)
    const averageHashrateRound = round((averageHashrate / 1000000), 2)
    const unpaidSumRounded = unpaid / 1000000000000000000
    console.log(unpaidSumRounded)

    return (
      <View style={styles.container}>
        <Text style={styles.poolTitle}>
          {poolName}
        </Text>
        <Text style={styles.poolAddress}>
          {minerAddress}
        </Text>
        <View style={styles.poolStats}>
          {poolData &&
            <View>
              <View style={styles.hashRates}>
                <Text>Reported hashrate: {reportedHashRateRound} MH/s</Text>
                <Text>Current hashrate: {currentHashrateRound} MH/s</Text>
                <Text>Average hashRates: {averageHashrateRound} MH/s</Text>
              </View>
              <View style={styles.workersStat}>
                <Text>Valid shares in last 1h: {validShares}</Text>
                <Text>Upaid ballance: {unpaidSumRounded} </Text>
              </View>
            </View>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
    marginBottom: 10,
  },
  poolTitle: {
    textAlign: "center",
    fontSize: 30,
    color: '#555',
    marginBottom: 10,
  },
  poolAddress: {
    textAlign: 'center',
    marginBottom: 10,
  },
  hashRates: {
    flex: 1,
  },
  hashRates: {
    paddingTop: 10,
    borderTopWidth: 1,
    paddingBottom: 10,
  },
  workersStat: {
    paddingTop: 10,
    borderTopWidth: 1,
    paddingBottom: 10,
  }
});
