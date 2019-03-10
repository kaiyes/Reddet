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
import styles from '../utils/styles/postDetail.style'
import { LinearGradient } from 'expo'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default class PostDetail extends Component {
  state = {
    commentText: '',
    replyText: '',
    touched: false,
    list: [1, 3, 4],
  }

  render() {
    const { replyText, commentText, touched } = this.state

    return (
      <ScrollView style={styles.container}>
        <ImageBackground style={styles.image} source={''}>
          <LinearGradient
            colors={['transparent', '#000000']}
          >
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>
                14 min ago in
              </Text>
              <Text style={styles.tribeText}>news</Text>
            </View>
            <Text style={styles.headingText}>social</Text>

            <View style={styles.smallVerticalGap} />
          </LinearGradient>
        </ImageBackground>

        <View style={styles.postContainer}>
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
                  kaiyes
                </Text>
              </View>
              <View style={styles.badgeRow}>
                <View style={styles.firstBadge}>
                  <View style={styles.innerBadge}>
                    <Text style={styles.badgeText}>12</Text>
                  </View>
                </View>
                <View style={styles.badge}>
                  <View style={styles.innerBadge}>
                    <Icon
                      name="star"
                      type="font-awesome"
                      color="#d8d8d8"
                      size={13}
                    />
                    <Text style={styles.badgeText}>OG</Text>
                  </View>
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>
                UNFOLLOW
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.iconContainer}>
              <Icon
                name="arrow-up"
                type="font-awesome"
                color="#999999"
                size={13}
              />
            </TouchableOpacity>

            <Text style={styles.voteText}>12</Text>
            <TouchableOpacity style={styles.iconContainer}>
              <Icon
                name="arrow-down"
                type="font-awesome"
                color="#999999"
                size={13}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.comment}>
              <Icon
                name="comment"
                type="font-awesome"
                color="#999999"
                size={13}
              />
            </TouchableOpacity>
            <Text style={styles.voteText}>12</Text>

            <TouchableOpacity style={styles.iconContainer}>
              <Icon
                name="bookmark"
                type="font-awesome"
                color="#999999"
                size={13}
              />
            </TouchableOpacity>

            <Text style={styles.voteText}>12</Text>
            <TouchableOpacity style={styles.iconContainer}>
              <Icon
                name="share-alt"
                type="font-awesome"
                color="#999999"
                size={13}
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
                      uri: '',
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
