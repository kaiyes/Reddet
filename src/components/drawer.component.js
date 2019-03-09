import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native'
import { DrawerItems } from 'react-navigation'
import {
  Avatar,
  Icon,
  SearchBar,
} from 'react-native-elements'
import Collapsible from 'react-native-collapsible'

import styles from '../utils/styles/drawer.style'

class Drawer extends Component {
  state = {
    searchText: '',
    touched: false,
    isCollapsed: true,
  }

  _toggleTribes = async () => {
    await this.setState({
      isCollapsed: !this.state.isCollapsed,
    })
    console.log(this.state.isCollapsed)
  }

  _deleteTribe = () => {
    console.log('tribe clicked')
  }

  render() {
    const { searchText, touched, isCollapsed } = this.state
    const { navigate } = this.props.navigation

    return (
      <ScrollView style={styles.container}>
        <View style={styles.secondContainer}>
          <View style={styles.searchBox}>
            <SearchBar
              onChangeText={text =>
                this.setState({
                  searchText: text,
                })
              }
              onClearText={() => {
                this.setState({
                  searchText: '',
                })
              }}
              icon={{
                type: 'font-awesome',
                name: 'search',
                color: 'white',
              }}
              placeholder="Search"
              containerStyle={styles.searchBar}
              clearIcon
              inputStyle={styles.inputText}
              value={searchText}
            />
          </View>

          <View style={styles.userBox}>
            <Avatar
              small
              rounded
              source={{
                uri: '',
              }}
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
              containerStyle={styles.avatar}
            />
            <View style={styles.nameHolder}>
              <View style={styles.row}>
                <Text style={styles.authorText}>
                  Kaiyes
                </Text>
              </View>
              <View style={styles.badgeRow}>
                <View style={styles.firstBadge}>
                  <View style={styles.innerBadge}>
                    <Text style={styles.badgeText}>
                      123
                    </Text>
                  </View>
                </View>
                <View style={styles.badge}>
                  <View style={styles.innerBadge}>
                    <Icon
                      name="star"
                      type="font-awesome"
                      color="#d8d8d8"
                      size={10}
                    />
                    <Text style={styles.badgeText}>OG</Text>
                  </View>
                </View>
                <View style={styles.badge}>
                  <View style={styles.innerBadge}>
                    <Icon
                      name="wrench"
                      type="font-awesome"
                      color="#d8d8d8"
                      size={10}
                    />
                    <Text style={styles.badgeText}>
                      Socio TEAM
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.line} />
          <View style={styles.verticalGap} />
          <View style={styles.settingsContainer}>
            <View style={styles.settingsRow}>
              <Icon
                name="cog"
                type="font-awesome"
                color="#ffffff"
                size={18}
              />
              <Text
                style={styles.settingsText}
                onPress={() => {
                  navigate('Settings')
                }}
              >
                Settings
              </Text>
            </View>
            <View style={styles.settingsRow}>
              <Icon
                name="wallet"
                type="entypo"
                color="#ffffff"
                size={18}
              />
              <Text
                style={styles.settingsText}
                onPress={() => {
                  navigate('Wallet')
                }}
              >
                My Wallet
              </Text>
              <View style={styles.horizontalGap} />
              <View style={styles.badge}>
                <View style={styles.innerBadge}>
                  <Text style={styles.badgeText}>
                    1,235,881
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.settingsRow}>
              <Icon
                name="bell"
                type="font-awesome"
                color="#ffffff"
                size={18}
              />
              <Text
                style={styles.settingsText}
                onPress={() => {
                  navigate('Notifications')
                }}
              >
                Notifications
              </Text>
              <View style={styles.horizontalGap} />
              <View style={styles.firstBadge}>
                <View style={styles.innerBadge}>
                  <Text style={styles.badgeText}>3</Text>
                </View>
              </View>
            </View>
            <View style={styles.settingsRow}>
              <Icon
                name="bookmark"
                type="font-awesome"
                color="#ffffff"
                size={18}
              />
              <Text
                style={styles.settingsText}
                onPress={() => {
                  navigate('Bookmarks')
                }}
              >
                Bookmarks
              </Text>
            </View>
          </View>
          <View style={styles.line} />

          <View style={styles.tribeContainer}>
            <View style={styles.tribeHeader}>
              <TouchableOpacity
                onPress={() => {
                  this._toggleTribes()
                }}
              >
                <Icon
                  name="menu-down"
                  type="material-community"
                  color="#ffffff"
                  size={18}
                />
              </TouchableOpacity>
              <Text style={styles.tribeText}>
                My Tribes
              </Text>
              <Text style={styles.editText}>Edit</Text>
            </View>

            <Collapsible collapsed={isCollapsed}>
              <View style={styles.tribeRow}>
                <View style={styles.blackBadge}>
                  <View style={styles.innerBadge}>
                    <Text style={styles.badgeText}>12</Text>
                  </View>
                </View>
                <Text style={styles.tribeRowText}>
                  sicily
                </Text>
              </View>
            </Collapsible>

            <View style={styles.findMoreContainer}>
              <Icon
                name="plus"
                type="entypo"
                color="#ffffff"
                size={15}
                onPress={this._deleteTribe}
              />
              <Text style={styles.findMoreText}>
                Find more tribes
              </Text>
            </View>
            <View style={styles.line} />
          </View>
        </View>
      </ScrollView>
    )
  }
}
export default Drawer
