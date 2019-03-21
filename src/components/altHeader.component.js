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
                    text="Cool "
                  />
                  <MenuOption
                    onSelect={() => {
                      changeTheme('traditional')
                    }}
                    text="Traditional "
                  />
                  <MenuOption
                    onSelect={() => {
                      changeTheme('compact')
                    }}
                    text="Comapact "
                  />
                  <MenuOption
                    onSelect={() => {
                      changeTheme('compact2')
                    }}
                    text="Comapact 2 "
                  />
                </MenuOptions>
              </Menu>
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
