import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  AsyncStorage,
} from 'react-native'
import {
  Avatar,
  Icon,
  Divider,
  Button,
} from 'react-native-elements'
import _ from 'lodash'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

import styles from '../utils/styles/homeFeed.style'
import Header from '../components/header.component'
import Colors from '../utils/Colors'

class HomeFeedScreen extends Component {
  state = {
    sideColumn: true,
    down: false,
    postData: [
      {
        postTitle:
          'From Software Has Made sekiro which is about to come out in 2 weeks, Cant wait',
        postId: '001',
        createdBy: 'melinda',
        subReddit: 'r/freefolk',
        time: '2 min',
        vote: 12,
        img:
          'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        postImage:
          'https://speckyboy.com/wp-content/uploads/2014/07/flat_web_design_13.jpg',
        comments: 93,
      },
      {
        postTitle: 'Like this if you like that',
        postId: '002',
        createdBy: 'kaiyes',
        subReddit: 'r/freefolk',
        time: '1 hour',
        vote: 122,
        img:
          'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        postImage: 'https://i.redd.it/d2l95vvii8l21.jpg',
        comments: 999,
      },
    ],
  }

  _logout = async () => {
    await AsyncStorage.removeItem('@userToken:token')
    this.props.navigation.navigate('Auth')
  }

  _upVote = async item => {
    const newVote = this.state.postData.map(post => {
      if (post.postId !== item) return post
      return {
        ...post,
        vote: post.vote + 1,
      }
    })
    this.setState({ postData: newVote })
  }

  _downVote = async item => {
    const newVote = this.state.postData.map(post => {
      if (post.postId !== item) return post
      return {
        ...post,
        vote: post.vote - 1,
      }
    })
    this.setState({ postData: newVote })
  }
  _subRedditBelow = async () => {
    await this.setState({
      down: !down,
    })
  }

  render() {
    const { sideColumn, down, postData } = this.state
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Header
          onMenuPress={() => {
            this.props.navigation.toggleDrawer()
          }}
          onHeaderPress={async () => {
            await this.setState({
              sideColumn: !sideColumn,
            })
          }}
        />

        <View style={styles.postContainer}>
          <FlatList
            data={postData}
            keyExtractor={item => item.postId}
            ItemSeparatorComponent={() => (
              <View style={styles.separator} />
            )}
            ItemSeparatorComponent={() => (
              <View style={styles.separator} />
            )}
            onEndReachedThreshold={0.6}
            renderItem={({ item }) => (
              <View style={styles.post}>
                {sideColumn ? (
                  <View style={styles.leftColumn}>
                    <TouchableOpacity
                      onPress={() => {
                        this._upVote(item.postId)
                      }}
                    >
                      <Icon
                        name="caretup"
                        type="antdesign"
                        color={Colors.black}
                        size={10}
                        reverse
                      />
                    </TouchableOpacity>
                    <Text
                      style={styles.voteText}
                      onPress={() => {
                        this._logout()
                      }}
                    >
                      {item.vote}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        this._downVote(item.postId)
                      }}
                    >
                      <Icon
                        name="caretdown"
                        type="antdesign"
                        color={Colors.black}
                        size={10}
                        reverse
                      />
                    </TouchableOpacity>
                  </View>
                ) : null}

                <View
                  style={
                    sideColumn
                      ? [styles.rightColumn]
                      : [
                          styles.rightColumn,
                          { marginLeft: wp('2.5%') },
                        ]
                  }
                >
                  <View style={styles.postTitleContainer}>
                    <Image
                      style={
                        sideColumn
                          ? [
                              styles.image,
                              { marginBottom: hp('2%') },
                            ]
                          : [
                              styles.image,
                              { marginBottom: hp('.5%') },
                            ]
                      }
                      source={{
                        uri: item.postImage,
                      }}
                    />
                    <View>
                      {down ? null : (
                        <View
                          style={[
                            styles.timeUserTribe,
                            { marginBottom: hp('1%') },
                          ]}
                        >
                          <TouchableOpacity
                            onPress={() => {
                              console.log('avatar')
                            }}
                          >
                            <Avatar
                              rounded
                              source={{
                                uri: item.img,
                              }}
                              activeOpacity={0.7}
                              containerStyle={styles.avatar}
                            />
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              console.log('text')
                            }}
                          >
                            <Text style={styles.subReddit}>
                              {item.subReddit}
                            </Text>
                          </TouchableOpacity>
                          <Text style={styles.timeText}>
                            {item.time} ago
                          </Text>
                        </View>
                      )}

                      <Text
                        style={
                          sideColumn
                            ? [
                                styles.postTitle,
                                { width: wp('60%') },
                              ]
                            : [
                                styles.postTitle,
                                { width: wp('70%') },
                              ]
                        }
                        onPress={() => {
                          navigate('PostDetail')
                        }}
                      >
                        {item.postTitle.toString().length >
                        80
                          ? `${item.postTitle
                              .toString()
                              .substr(0, 70)}...`
                          : item.postTitle.toString()}
                      </Text>
                      {down ? (
                        <View
                          style={[
                            styles.timeUserTribe,
                            { marginTop: hp('.5%') },
                          ]}
                        >
                          <TouchableOpacity
                            onPress={() => {
                              console.log('avatar')
                            }}
                          >
                            <Avatar
                              rounded
                              source={{
                                uri: item.postImage,
                              }}
                              activeOpacity={0.7}
                              containerStyle={styles.avatar}
                            />
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              console.log('text')
                            }}
                          >
                            <Text style={styles.subReddit}>
                              {item.subReddit}
                            </Text>
                          </TouchableOpacity>
                          <Text style={styles.timeText}>
                            {item.time} ago
                          </Text>
                        </View>
                      ) : null}
                    </View>
                  </View>
                  {sideColumn ? null : (
                    <View style={styles.bottomContainer}>
                      <TouchableOpacity
                        style={styles.row}
                        onPress={() => {
                          this._upVote(item.postId)
                        }}
                      >
                        <Icon
                          name="caretup"
                          type="antdesign"
                          color={Colors.lightGrey}
                          size={14}
                          containerStyle={styles.upIcon}
                        />
                      </TouchableOpacity>
                      <Text style={styles.commentText}>
                        {item.vote}
                      </Text>
                      <TouchableOpacity
                        style={styles.row}
                        onPress={() => {
                          this._downVote(item.postId)
                        }}
                      >
                        <Icon
                          name="caretdown"
                          type="antdesign"
                          color={Colors.lightGrey}
                          size={14}
                          containerStyle={styles.downIcon}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.row}>
                        <Text style={styles.commentText}>
                          {item.comments} comments
                        </Text>
                        <Icon
                          name="comment"
                          type="foundation"
                          color={Colors.lightGrey}
                          size={14}
                          containerStyle={
                            styles.commentIcon
                          }
                        />
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.row}>
                        <Text style={styles.commentText}>
                          save
                        </Text>
                        <Icon
                          name="save"
                          type="entypo"
                          color={Colors.lightGrey}
                          size={14}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.row}>
                        <Text style={styles.commentText}>
                          share
                        </Text>
                        <Icon
                          name="md-share-alt"
                          type="ionicon"
                          color={Colors.lightGrey}
                          size={14}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.row}>
                        <Text style={styles.commentText}>
                          report
                        </Text>
                        <Icon
                          name="report-problem"
                          type="material"
                          color={Colors.lightGrey}
                          size={14}
                        />
                      </TouchableOpacity>
                    </View>
                  )}
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
