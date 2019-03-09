import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native'
import _ from 'lodash'

export default class AuthLoadingScreen extends React.Component {
  constructor() {
    super()
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem(
      '@userToken:token'
    )

    this.props.navigation.navigate(
      userToken != null ? 'App' : 'Auth'
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
