import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native'
import {
  Avatar,
  Icon,
  Divider,
  SearchBar,
} from 'react-native-elements'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import { LinearGradient } from 'expo'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

import styles from '../utils/styles/postDetail.style'
import homeFeedStyle from '../utils/styles/altHomefeed.style'
import PostData from '../utils/postData'
import Colors from '../utils/Colors'

export default class PostDetail extends Component {
  state = {
    commentText: '',
    replyText: '',
    touched: false,
    list: [1, 3, 4],
    vote: 12,
  }

  _upVote = () => {
    this.setState({
      vote: this.state.vote + 1,
    })
  }

  _downVote = () => {
    this.setState({
      vote: this.state.vote - 1,
    })
  }

  render() {
    const {
      replyText,
      commentText,
      touched,
      vote,
    } = this.state

    return (
      <ScrollView style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={{
            uri:
              'https://speckyboy.com/wp-content/uploads/2014/07/flat_web_design_13.jpg',
          }}
        >
          <LinearGradient colors={['transparent', 'black']}>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>
                {PostData[0].time} ago in
              </Text>
              <Text style={styles.subReddit}>
                {PostData[0].subReddit}
              </Text>
            </View>
            <Text style={styles.headingText}>
              {PostData[0].postTitle}
            </Text>

            <View style={styles.smallVerticalGap} />
          </LinearGradient>
        </ImageBackground>
        <View style={styles.postContainer}>
          <View style={styles.userBox}>
            <View style={homeFeedStyle.timeUserTribe}>
              <TouchableOpacity
                style={[
                  homeFeedStyle.iconShadow,
                  { marginLeft: wp('2%') },
                ]}
              >
                <Avatar
                  rounded
                  source={{
                    uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  }}
                  activeOpacity={0.7}
                />
              </TouchableOpacity>
              <View style={{ marginLeft: wp('1%') }}>
                <View style={homeFeedStyle.row}>
                  <Text style={homeFeedStyle.timeText}>
                    by
                  </Text>
                  <TouchableOpacity>
                    <Text style={homeFeedStyle.username}>
                      u/kaiyes
                    </Text>
                  </TouchableOpacity>
                  <Text style={homeFeedStyle.timeText}>
                    in
                  </Text>
                </View>
                <TouchableOpacity>
                  <Text
                    style={[
                      homeFeedStyle.subReddit,
                      { marginLeft: wp('1%') },
                    ]}
                  >
                    r/kneeler
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>
                UNFOLLOW
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomContainer}>
            <TouchableOpacity
              style={homeFeedStyle.row}
              onPress={() => {
                this._upVote()
              }}
            >
              <Icon
                name="caretup"
                type="antdesign"
                color={Colors.primary}
                size={14}
                reverse
                reverseColor={Colors.black}
                containerStyle={homeFeedStyle.iconShadow}
              />
            </TouchableOpacity>
            <Text style={styles.upVoteText}>{vote}</Text>
            <TouchableOpacity
              style={homeFeedStyle.row}
              onPress={() => {
                this._downVote()
              }}
            >
              <Icon
                name="caretdown"
                type="antdesign"
                color={Colors.primary}
                size={14}
                reverse
                reverseColor={Colors.black}
                containerStyle={homeFeedStyle.iconShadow}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                homeFeedStyle.row,
                {
                  alignItems: 'center',
                },
              ]}
            >
              <Icon
                name="comment"
                type="foundation"
                color={Colors.primary}
                size={14}
                reverse
                reverseColor={Colors.black}
                containerStyle={homeFeedStyle.iconShadow}
              />
              <Text style={styles.upVoteText}>1k</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                homeFeedStyle.row,
                {
                  alignItems: 'center',
                },
              ]}
            >
              <Icon
                name="save"
                type="entypo"
                color={Colors.primary}
                size={14}
                reverse
                reverseColor={Colors.black}
                containerStyle={homeFeedStyle.iconShadow}
              />
            </TouchableOpacity>

            <TouchableOpacity style={homeFeedStyle.row}>
              <Icon
                name="md-share-alt"
                type="ionicon"
                color={Colors.primary}
                size={14}
                reverse
                reverseColor={Colors.black}
                containerStyle={homeFeedStyle.iconShadow}
              />
            </TouchableOpacity>
            <TouchableOpacity style={homeFeedStyle.row}>
              <Icon
                name="flag-variant-outline"
                type="material-community"
                color={Colors.primary}
                size={14}
                reverse
                reverseColor={Colors.black}
                containerStyle={homeFeedStyle.iconShadow}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.postHightLightText}>
            If you’re a fan of the Dark Souls series, you’ve
            probably been keeping an eye out for Sekiro:
            Shadows Die Twice, the latest FromSoftware
            title. Well, we got it, and we’re here to break
            it down. Watch me and Kotaku’s own Tim Rogers
            put the game through its paces for an hour and a
            half and answer some basic questions. How Dark
            Souls-y is it? Will this appeal to Nioh mavens?
            Will it still kick your butt? Tune in and find
            out. Sekiro: Shadows Die Twice is out Friday for
            PS4, Xbox, and PC.
          </Text>
        </View>

        {/* ################# COMENTS Box ########################## */}
        {/* ################# COMENTS Box ########################## */}
        {/* ################# COMENTS Box ########################## */}

        <View style={styles.commentBox}>
          <View style={styles.smallVerticalGap} />
          <View style={styles.row}>
            <Text style={styles.commentNumber}>
              124 comments
            </Text>
            <Text style={styles.sortByText}>Sort by</Text>
            <Text style={styles.ratingText}>Top Rated</Text>
            <View style={styles.horizontalGap} />
            <TouchableOpacity>
              <Icon
                name="menu-down"
                type="material-community"
                color="#000000"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.searchBox}>
            <TextInput
              style={styles.searchBar}
              onChangeText={text =>
                this.setState({
                  commentText: text,
                  touched: true,
                })
              }
              value={commentText}
              placeholder="Write a comment"
              placeholderTextColor="#999999"
            />
            <View style={styles.crossContainer}>
              <Icon
                name="circle-with-cross"
                type="entypo"
                size={20}
                color="#cccccc"
                iconStyle={styles.icon}
                onPress={() =>
                  this.setState({
                    touched: false,
                    commentText: null,
                  })
                }
              />
            </View>
          </View>
          {/* ################# COMENTS ########################## */}
          {/* ################# COMENTS ########################## */}
          {/* ################# COMENTS ########################## */}

          <FlatList
            data={[1, 3, 4]}
            ItemSeparatorComponent={() => (
              <View style={styles.separator} />
            )}
            renderItem={() => (
              <View>
                <View style={styles.userInfo}>
                  <Avatar
                    small
                    rounded
                    source={{
                      uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    }}
                    activeOpacity={0.7}
                    containerStyle={styles.avatar}
                  />
                  <Text style={styles.commenterText}>
                    kaiyes
                  </Text>
                  <Text style={styles.commentTimeText}>
                    15 mins ago
                  </Text>
                </View>
                <Text style={styles.commentText}>
                  hey heyh{' '}
                </Text>
                <View style={styles.iconsContainer}>
                  <TouchableOpacity
                    style={styles.commentVote}
                  >
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
                  <TouchableOpacity>
                    <Text style={styles.replyText}>
                      Reply
                    </Text>
                  </TouchableOpacity>

                  <View style={styles.replyCounter}>
                    <Text style={styles.replyCounterText}>
                      22 Replies
                    </Text>
                  </View>

                  <TouchableOpacity style={styles.dotGap}>
                    <Icon
                      name="dots-three-horizontal"
                      type="entypo"
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
                {/* ###################### Reply ################### */}
                {/* ###################### Reply ################### */}
                {/* ###################### Reply ################### */}
                <View style={styles.replySeparator} />
                <FlatList
                  data={[1, 2, 4]}
                  ItemSeparatorComponent={() => (
                    <View style={styles.separator} />
                  )}
                  renderItem={() => (
                    <View style={styles.reply}>
                      <View style={styles.leftVertical} />
                      <View
                        style={styles.rightReplyContainer}
                      >
                        <View style={styles.userInfo}>
                          <Avatar
                            small
                            rounded
                            source={{
                              uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                            }}
                            onPress={() =>
                              console.log('Works!')
                            }
                            activeOpacity={0.7}
                            containerStyle={styles.avatar}
                          />
                          <Text
                            style={styles.commenterText}
                          >
                            kaiyes
                          </Text>
                          <Text
                            style={styles.commentTimeText}
                          >
                            15 mins ago
                          </Text>
                        </View>
                        <Text style={styles.commentText}>
                          hey now
                        </Text>
                        <View style={styles.iconsContainer}>
                          <TouchableOpacity
                            style={styles.commentVote}
                          >
                            <Icon
                              name="menu-up"
                              type="material-community"
                              color="#d8d8d8"
                            />
                          </TouchableOpacity>

                          <Text style={styles.voteText}>
                            22
                          </Text>
                          <TouchableOpacity>
                            <Icon
                              name="menu-down"
                              type="material-community"
                              color="#d8d8d8"
                            />
                          </TouchableOpacity>

                          <TouchableOpacity>
                            <Text style={styles.replyText}>
                              Reply
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={styles.dotGap}
                          >
                            <Icon
                              name="dots-three-horizontal"
                              type="entypo"
                              color="black"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  )}
                />

                <View style={styles.verticalGap} />
                <View style={styles.replyBox}>
                  <TextInput
                    style={styles.searchBar}
                    onChangeText={text =>
                      this.setState({
                        replyText: text,
                        touched: true,
                      })
                    }
                    value={replyText}
                    placeholder="Reply..."
                    placeholderTextColor="#999999"
                  />
                  <View style={styles.crossContainer}>
                    <Icon
                      name="circle-with-cross"
                      type="entypo"
                      size={20}
                      color="#cccccc"
                      iconStyle={styles.icon}
                      onPress={() =>
                        this.setState({
                          touched: false,
                          replyText: null,
                        })
                      }
                    />
                  </View>
                </View>

                <View style={styles.verticalGap} />
                {/* ###################### Reply ################### */}
                {/* ###################### Reply ################### */}
                {/* ###################### Reply ################### */}
              </View>
            )}
          />
        </View>
      </ScrollView>
    )
  }
}
