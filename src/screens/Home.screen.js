import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
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
import Colors from '../utils/Colors'

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
    postTitle:
      'From Software Has Made sekiro which is about to come out in 2 weeks, Cant wait',
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
      postTitle,
    } = this.state
    const { navigate } = this.props.navigation
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
                      name="caretup"
                      type="antdesign"
                      color={Colors.black}
                      size={10}
                      reverse
                    />
                  </TouchableOpacity>
                  <Text style={styles.voteText}>12</Text>
                  <TouchableOpacity>
                    <Icon
                      name="caretdown"
                      type="antdesign"
                      color={Colors.black}
                      size={10}
                      reverse
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.rightColumn}>
                  <View style={styles.postTitleContainer}>
                    <Image
                      style={styles.image}
                      source={{
                        uri:
                          'https://speckyboy.com/wp-content/uploads/2014/07/flat_web_design_13.jpg',
                      }}
                    />
                    <View>
                      <Text
                        style={styles.postTitle}
                        onPress={() => {
                          navigate('PostDetail')
                        }}
                      >
                        {postTitle.length > 60
                          ? `${postTitle
                              .toString()
                              .substr(0, 50)}...`
                          : postTitle}
                      </Text>
                      <View style={styles.timeUserTribe}>
                        <Avatar
                          rounded
                          source={{
                            uri:
                              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                          }}
                          activeOpacity={0.7}
                          containerStyle={styles.avatar}
                        />
                        <Text style={styles.timeText}>
                          2 min ago{' '}
                          <Text style={styles.subReddit}>
                            u/Keyboard
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.bottomContainer} />
                </View>
              </View>
            )}
          />
        </View>
      </View>
    )
  }
}
export default HomeFeedScreen
