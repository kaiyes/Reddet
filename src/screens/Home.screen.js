import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  FlatList,
  AsyncStorage,
  Clipboard,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Modal,
  Image,
} from 'react-native'
import {
  Avatar,
  Icon,
  Divider,
  Button,
} from 'react-native-elements'
import _ from 'lodash'

import styles from '../utils/styles/homeFeed.style'
import Header from '../components/header.component'

class HomeFeedScreen extends Component {
  state = {
    isModalVisible: false,
    text: '',
    reportId: '',
    reasonForReporting: '',
    isSecondModalVisible: false,
    title: '',
    excerpt: '',
    tags: [],
    alter: false,
    tribe: '',
    tribeId: '',
    content: '',
    searched: false,
    pics: {},
    tribeResult: [],
  }

  render() {
    const {
      title,
      excerpt,
      tags,
      alter,
      tribe,
      tribeId,
      tribeResult,
      content,
      searched,
      pics,
    } = this.state

    return (
      <View style={styles.container}>
        <Header
          onMenuPress={() => {
            this.props.navigation.toggleDrawer()
          }}
          onProfilePress={async () => {
            console.log('profilePressed')
          }}
        />

        <View style={styles.secondContainer}>
          <View style={styles.postContainer}>
            <FlatList
              data={[1, 2]}
              ItemSeparatorComponent={() => (
                <View style={styles.separator} />
              )}
              ItemSeparatorComponent={() => (
                <View style={styles.separator} />
              )}
              onEndReachedThreshold={0.6}
              renderItem={() => (
                <View style={styles.post}>
                  <View style={styles.leftColumn}>
                    <TouchableOpacity>
                      <Icon
                        name="menu-up"
                        type="material-community"
                        color="#d8d8d8"
                      />
                    </TouchableOpacity>

                    <Text style={styles.voteText}>12</Text>

                    <TouchableOpacity>
                      <Icon
                        name="menu-down"
                        type="material-community"
                        color="#d8d8d8"
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.rightColumn}>
                    <View style={styles.postTitleContainer}>
                      <Image
                        style={styles.image}
                        source={{
                          uri:
                            'https://facebook.github.io/react-native/docs/assets/favicon.png',
                        }}
                      />
                      <View style={styles.titleHolder}>
                        <Text style={styles.tribeText}>
                          kaiyes
                        </Text>
                        <Text style={styles.postTitle}>
                          Crypto wipeout deepens to $640
                          Billion as Ether leads declines
                        </Text>
                      </View>
                    </View>
                    <View style={styles.bottomContainer}>
                      <Text style={styles.timeText}>
                        Posted 2 min ago
                      </Text>
                      <View style={styles.iconContainer}>
                        <TouchableOpacity
                          onPress={() =>
                            console.log('hello')
                          }
                        >
                          <Icon
                            name="comment"
                            type="font-awesome"
                            color="#cccccc"
                            size={14}
                            color="black"
                            reverse
                          />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Icon
                            name="bookmark"
                            type="font-awesome"
                            color="#cccccc"
                            size={14}
                            color="black"
                            reverse
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    )
  }
}
export default HomeFeedScreen
