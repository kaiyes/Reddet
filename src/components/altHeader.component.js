import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from '../utils/styles/altHeader.style'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
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
        {({ theme, changeTheme }) => (
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
                      changeTheme('moreTraditional')
                    }}
                    text="More traditional Theme"
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
              style={[
                styles.headerText,
                {
                  marginLeft:
                    theme === 'traditional'
                      ? wp('2%')
                      : theme === 'cool'
                      ? wp('8%')
                      : wp('2%'),
                },
              ]}
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
