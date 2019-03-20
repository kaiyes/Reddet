import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from '../utils/styles/altHeader.style'
import Colors from '../utils/Colors'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import { ThemeConsumer } from '../utils/theme'

class Header extends Component {
  render() {
    return (
      <ThemeConsumer>
        {({ changeTheme }) => (
          <View style={styles.header}>
            <View style={styles.iconRow}>
              <Menu>
                <MenuTrigger>
                  <Icon
                    name="browser"
                    type="entypo"
                    color={Colors.anotherGrey}
                    size={16}
                    containerStyle={styles.menu}
                  />
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption
                    onSelect={() => {
                      changeTheme('cool')
                    }}
                    text="cool Theme"
                  />
                  <MenuOption
                    onSelect={() => {
                      changeTheme('traditional')
                    }}
                    text="traditional Theme"
                  />
                  <MenuOption
                    onSelect={() => {
                      changeTheme('traditional2')
                    }}
                    text="traditional 2 Theme"
                  />
                  <MenuOption
                    onSelect={() => {
                      changeTheme('moreTraditional')
                    }}
                    text="More traditional Theme"
                  />
                  <MenuOption
                    onSelect={() => {
                      changeTheme('moreTraditional2')
                    }}
                    text="More traditional 2 Theme"
                  />
                </MenuOptions>
              </Menu>
              <Icon
                name="menu"
                type="material-community"
                color={Colors.anotherGrey}
                onPress={this.props.onMenuPress}
              />
            </View>
            <Text
              style={styles.headerText}
              onPress={this.props.onHeaderPress}
            >
              News Feed
            </Text>
          </View>
        )}
      </ThemeConsumer>
    )
  }
}

export default Header
