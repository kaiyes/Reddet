import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from '../utils/styles/header.style'

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Icon
          name="menu"
          type="material-community"
          color="#000000"
          onPress={this.props.onMenuPress}
          containerStyle={styles.menuIcon}
        />
        <Text
          style={styles.headerText}
          onPress={this.props.onHeaderPress}
        >
          Socio
        </Text>
      </View>
    )
  }
}

export default Header
