import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MenuProvider } from 'react-native-popup-menu'
import { ThemeProvider } from './src/utils/theme'
import AppNavigation from './src/navigations'

export default class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <MenuProvider>
          <AppNavigation />
        </MenuProvider>
      </ThemeProvider>
    )
  }
}
