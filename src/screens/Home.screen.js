import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TouchableHighlight,
} from 'react-native'
import {
  Avatar,
  Icon,
  Divider,
} from 'react-native-elements'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import Swipeable from 'react-native-swipeable'
import _ from 'lodash'

import Header from '../components/header.component'
import styles from '../utils/styles/homeFeed.style'

export default class AltHomeFeedScreen extends Component {
  state = {
    list: [1, 2, 3, 4, 5, 6, 3, 3, 3, 3, 3, 3, 3, 3],
    pills: [
      'Anime',
      'Religion',
      'Politics',
      'Protests',
      'Saitama',
      'Shingeki no kyojin',
      'One punch Man',
      'Graphics',
      'Tech',
    ],
  }
  _drawerToggle = () => {
    this.props.navigation.toggleDrawer()
  }

  render() {
    const { list, pills } = this.state
    const { navigate } = this.props.navigation
    const rightButtons = [
      <View style={styles.swipedButtons}>
        <TouchableHighlight
          style={styles.swipedInnerContainerOne}
        >
          <Icon
            name="comment"
            type="font-awesome"
            color="#cccccc"
            size={19}
            color="black"
            reverse
            onPress={() => console.log('hello')}
          />
        </TouchableHighlight>
      </View>,
      <View style={styles.swipedButtons}>
        <TouchableHighlight
          style={styles.swipedInnerContainer}
        >
          <Icon
            name="bookmark"
            type="font-awesome"
            color="#cccccc"
            size={19}
            color="black"
            reverse
          />
        </TouchableHighlight>
      </View>,
      <View style={styles.swipedButtons}>
        <TouchableHighlight
          style={styles.swipedInnerContainer}
        >
          <Icon
            name="share-alt"
            type="font-awesome"
            color="#cccccc"
            size={19}
            color="black"
            reverse
            onPress={() => console.log('hello')}
          />
        </TouchableHighlight>
      </View>,
    ]
    return (
      <View style={styles.container}>
        <Header onMenuPress={this._drawerToggle} />
        <View style={styles.secondContainer}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollview}
          >
            {pills.map((item, index) => {
              return (
                <TouchableOpacity style={styles.tribePill}>
                  <Text style={styles.pillText}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )
            })}
          </ScrollView>

          <View style={styles.postContainer}>
            <FlatList
              data={this.state.list}
              keyExtractor={item => item._id}
              ItemSeparatorComponent={() => (
                <View style={styles.separator} />
              )}
              renderItem={({ item }) => (
                <Swipeable
                  key={item._id}
                  rightButtons={rightButtons}
                >
                  <View style={styles.post}>
                    <View style={styles.leftColumn}>
                      <Icon
                        name="menu-up"
                        type="material-community"
                        color="#d8d8d8"
                      />
                      <Text style={styles.voteText}>
                        88
                      </Text>
                      <Icon
                        name="menu-down"
                        type="material-community"
                        color="#d8d8d8"
                      />
                    </View>
                    <View style={styles.rightColumn}>
                      <View style={styles.postTitle}>
                        <Text
                          style={styles.postText}
                          onPress={() => {
                            navigate('PostDetail')
                          }}
                        >
                          Gtx 1180 cards will be launching
                          this august, should you wait for
                          the next gen or buy now ?
                        </Text>
                        <View>
                          <Menu>
                            <MenuTrigger>
                              <Icon
                                name="dots-three-vertical"
                                type="entypo"
                                color="#d8d8d8"
                                size={16}
                              />
                            </MenuTrigger>
                            <MenuOptions>
                              <MenuOption
                                onSelect={() =>
                                  console.log('saved')
                                }
                              >
                                <View style={styles.row}>
                                  <Icon
                                    name="pencil"
                                    type="evilicon"
                                    color="black"
                                    reverse
                                    size={16}
                                  />
                                  <Text
                                    style={
                                      styles.menuOptionText
                                    }
                                  >
                                    Edit My post
                                  </Text>
                                </View>
                              </MenuOption>
                              <MenuOption
                                onSelect={() =>
                                  console.log('saved')
                                }
                              >
                                <View style={styles.row}>
                                  <Icon
                                    name="delete"
                                    type="material-community"
                                    color="black"
                                    reverse
                                    size={16}
                                  />
                                  <Text
                                    style={
                                      styles.menuOptionText
                                    }
                                  >
                                    Delete My post
                                  </Text>
                                </View>
                              </MenuOption>
                              <MenuOption
                                onSelect={() =>
                                  console.log('saved')
                                }
                              >
                                <View style={styles.row}>
                                  <Icon
                                    name="link"
                                    type="entypo"
                                    color="black"
                                    reverse
                                    size={16}
                                  />
                                  <Text
                                    style={
                                      styles.menuOptionText
                                    }
                                  >
                                    Permalink
                                  </Text>
                                </View>
                              </MenuOption>
                              <MenuOption
                                onSelect={() =>
                                  console.log('saved')
                                }
                              >
                                <View style={styles.row}>
                                  <Icon
                                    name="md-person"
                                    type="ionicon"
                                    color="black"
                                    reverse
                                    size={16}
                                  />
                                  <Text
                                    style={
                                      styles.menuOptionText
                                    }
                                  >
                                    Pablo's Profile
                                  </Text>
                                </View>
                              </MenuOption>
                              <MenuOption
                                onSelect={() =>
                                  console.log('saved')
                                }
                              >
                                <View style={styles.row}>
                                  <Icon
                                    name="flag"
                                    type="font-awesome"
                                    color="black"
                                    reverse
                                    size={16}
                                  />
                                  <Text
                                    style={
                                      styles.menuOptionText
                                    }
                                  >
                                    Report Post
                                  </Text>
                                </View>
                              </MenuOption>
                            </MenuOptions>
                          </Menu>
                        </View>
                      </View>
                      <View style={styles.userInfo}>
                        <Avatar
                          small
                          rounded
                          source={{
                            uri:
                              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                          }}
                          activeOpacity={0.7}
                        />
                        <View style={styles.nameHolder}>
                          <View style={styles.row}>
                            <Text style={styles.authorText}>
                              Katie
                            </Text>
                            <View style={styles.badge}>
                              <Text
                                style={styles.badgeText}
                              >
                                323
                              </Text>
                            </View>
                          </View>
                          <View style={styles.row}>
                            <Text style={styles.timeText}>
                              Posted 3 hours ago in
                            </Text>
                            <Text style={styles.tribeText}>
                              Tribe
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </Swipeable>
              )}
            />
          </View>
        </View>
      </View>
    )
  }
}
