import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from '../utils/styles/altHeader.style'

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.row}>
          <Icon
            name="menu"
            type="material-community"
            color="#000000"
            onPress={this.props.onMenuPress}
            containerStyle={styles.menuIcon}
          />
        </View>
        <Text
          style={styles.headerText}
          onPress={this.props.onHeaderPress}
        >
          News Feed
        </Text>
      </View>
    )
  }
}

export default Header
