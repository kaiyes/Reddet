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

import styles from '../utils/styles/drawer.style'

class Drawer extends Component {
  state = {
    searchText: '',
    touched: false,
    tribes: [1, 2, 3, 5],
  }

  _deleteTribe = () => {
    console.log('tribe clicked')
  }

  render() {
    const { searchText, tribes } = this.state
    const { navigate } = this.props.navigation

    return (
      <ScrollView style={styles.container}>
        <View style={styles.secondContainer}>
          <View style={styles.userBox}>
            <Avatar
              small
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
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

          <View style={styles.tribeContainer}>
            {tribes.map(() => {
              ;<View style={styles.tribeRow}>
                <View style={styles.blackBadge}>
                  <View style={styles.innerBadge}>
                    <Text style={styles.badgeText}>12</Text>
                  </View>
                </View>
                <Text style={styles.tribeRowText}>
                  sicily
                </Text>
              </View>
            })}
          </View>
        </View>
      </ScrollView>
    )
  }
}
export default Drawer

// <View style={styles.searchBox}>
//   <SearchBar
//     onChangeText={text =>
//       this.setState({
//         searchText: text,
//       })
//     }
//     onClearText={() => {
//       this.setState({
//         searchText: '',
//       })
//     }}
//     icon={{
//       type: 'font-awesome',
//       name: 'search',
//       color: 'white',
//     }}
//     placeholder="Search"
//     containerStyle={styles.searchBar}
//     clearIcon
//     inputStyle={styles.inputText}
//     value={searchText}
//   />
//
// </View>
