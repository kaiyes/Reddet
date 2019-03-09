import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MenuProvider } from 'react-native-popup-menu'

import AppNavigation from './src/navigations'

export default class App extends Component {
  render() {
    return (
      <MenuProvider>
        <AppNavigation />
      </MenuProvider>
    )
  }
}
