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
  Image,
  ImageBackground,
  Platform,
  TextInput,
  AsyncStorage,
  WebView,
  Dimensions,
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
import Swipeable from 'react-native-swipeable'
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
          source="https://speckyboy.com/wp-content/uploads/2014/07/flat_web_design_13.jpg"
        >
          <LinearGradient
            colors={['transparent', '#000000']}
          >
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>
                {PostData[0].time} ago in
              </Text>
              <Text style={styles.tribeText}>
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

          <View
            style={[
              homeFeedStyle.bottomContainer,
              {
                marginTop: hp('1%'),
              },
            ]}
          >
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
            <Text style={homeFeedStyle.commentText}>
              {vote}
            </Text>
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
              <Text style={homeFeedStyle.commentText}>
                1k
              </Text>
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
              <Text style={homeFeedStyle.commentText}>
                save
              </Text>
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
                name="report-problem"
                type="material"
                color={Colors.primary}
                size={14}
                reverse
                reverseColor={Colors.black}
                containerStyle={homeFeedStyle.iconShadow}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.postHightLightText}>
            Gaming firm Razer has filed to go public through
            an IPO in Hong Kong as it looks to raise more
            than $600 million to go after growth
            opportunities.
          </Text>
          <Text style={styles.postText}>
            The U.S.-based company, which traces its origins
            back to Singapore, filed initial paperwork on
            Friday. Certain details — such as how much Razer
            is looking to raise, its valuation and the
            timing of the IPO — are not disclosed in the
            345-page filing, but a source close to the
            company confirms it’s likely to be upwards of
            $600 million (earlier in the year, it looks like
            Bloomberg reported $400 million). Razer’s last
            round of venture capital investment valued the
            firm at $2 billion.
          </Text>
          <View style={styles.quote}>
            <Icon
              name="quote-left"
              type="font-awesome"
              color="#000000"
              size={20}
            />
          </View>
          <Text style={styles.quoteHightLightText}>
            Are you one of the thousands of Iphone owners
            who has no idea that they can get free games for
            their Iphone?
          </Text>
          <Text style={styles.postText}>aaa</Text>
          <Text style={styles.headingText}>
            You may be interested in
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.card}>
              <Text style={styles.smallHeaderText}>
                svenskpolitik
              </Text>
              <Text style={styles.mainCardText}>
                Park Rangr helps you avoid parking tickets
                and find your car with AR
              </Text>
              <Text style={styles.cardTimeText}>
                45 mins ago
              </Text>
            </View>
            <View style={styles.whiteCard}>
              <Text style={styles.blackSmallHeaderText}>
                productivity
              </Text>
              <Text style={styles.blackCardMainText}>
                Slack makes another 11 new investments in
                its Slack fund
              </Text>
              <Text style={styles.blackCardTimeText}>
                45 mins ago
              </Text>
            </View>
          </ScrollView>
          <View style={styles.quote}>
            <Icon
              name="quote-left"
              type="font-awesome"
              color="#000000"
              size={20}
            />
          </View>
          <Text style={styles.quoteHightLightText}>
            We believe the THX business will improve our
            ability to deliver premiere audiovisual products
          </Text>
          <View style={styles.verticalGap} />
        </View>
        <Text style={styles.headingTextBlack}>
          You may be interested in
        </Text>
        <View style={styles.gridBox}>
          <View style={styles.cardWithourMargin}>
            <Text style={styles.smallHeaderText}>
              bicycling
            </Text>
            <Text style={styles.mainCardText}>
              Gaming firm Razer seeks to raise over $600M in
              Hong Kong IPO
            </Text>
            <Text style={styles.cardTimeText}>
              45 mins ago
            </Text>
          </View>
          <View style={styles.whiteCard}>
            <Text style={styles.blackSmallHeaderText}>
              PandR
            </Text>
            <Text style={styles.blackCardMainText}>
              Careship raises $4M from Spark Capital to
              address elderly care
            </Text>
            <Text style={styles.blackCardTimeText}>
              45 mins ago
            </Text>
          </View>
        </View>
        <View style={styles.smallVerticalGap} />
        <View style={styles.gridBox}>
          <View style={styles.cardWithourMargin}>
            <Text style={styles.smallHeaderText}>
              bicycling
            </Text>
            <Text style={styles.mainCardText}>
              Gaming firm Razer seeks to raise over $600M in
              Hong Kong IPO
            </Text>
            <Text style={styles.cardTimeText}>
              45 mins ago
            </Text>
          </View>
          <View style={styles.whiteCard}>
            <Text style={styles.blackSmallHeaderText}>
              PandR
            </Text>
            <Text style={styles.blackCardMainText}>
              Careship raises $4M from Spark Capital to
              address elderly care
            </Text>
            <Text style={styles.blackCardTimeText}>
              45 mins ago
            </Text>
          </View>
        </View>
        <View style={styles.commentBox}>
          <View style={styles.smallVerticalGap} />
          <View style={styles.row}>
            <Text style={styles.commentNumber}>
              shs h s h s
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
