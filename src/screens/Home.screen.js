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

import styles from '../utils/styles/altHomefeed.style'
import homeFeedStyle from '../utils/styles/homeFeed.style'
import Header from '../components/altHeader.component'
// import Header from '../components/header.component'
import Colors from '../utils/Colors'
import PostData from '../utils/postData'
import { ThemeConsumer } from '../utils/theme'

class HomeFeedScreen extends Component {
  state = {
    postData: PostData,
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

  _renderCoolFlat = () => {
    return (
      <FlatList
        data={this.state.postData}
        keyExtractor={item => item.postId}
        onEndReachedThreshold={0.6}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <View style={styles.leftColumn}>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  onPress={() => {
                    this._upVote(item.postId)
                  }}
                >
                  <Icon
                    name="arrow-up-bold-outline"
                    type="material-community"
                    color={Colors.primary}
                    size={16}
                    reverse
                    reverseColor={Colors.black}
                    containerStyle={styles.iconShadow}
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
                    name="arrow-down-bold-outline"
                    type="material-community"
                    color={Colors.primary}
                    size={16}
                    reverse
                    reverseColor={Colors.black}
                    containerStyle={styles.iconShadow}
                  />
                </TouchableOpacity>
                <Text style={styles.voteText}>
                  {item.vote}
                </Text>
                <TouchableOpacity
                  onPress={this.props.downVote}
                >
                  <Icon
                    name="comment-multiple-outline"
                    type="material-community"
                    color={Colors.primary}
                    size={16}
                    reverse
                    reverseColor={Colors.black}
                    containerStyle={styles.iconShadow}
                  />
                </TouchableOpacity>
                <Text style={styles.voteText}>
                  {item.vote}
                </Text>
                <TouchableOpacity
                  onPress={this.props.downVote}
                >
                  <Icon
                    name="bookmark-outline"
                    type="material-community"
                    color={Colors.primary}
                    size={16}
                    reverse
                    reverseColor={Colors.black}
                    containerStyle={styles.iconShadow}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.props.downVote}
                >
                  <Icon
                    name="flag-variant-outline"
                    type="material-community"
                    color={Colors.primary}
                    size={16}
                    reverse
                    reverseColor={Colors.black}
                    containerStyle={styles.iconShadow}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.rightColumn}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{
                    uri: item.postImage,
                  }}
                />
              </View>
              <Text style={styles.postTitle}>
                {item.postTitle.toString().length > 80
                  ? `${item.postTitle
                      .toString()
                      .substr(0, 70)}...`
                  : item.postTitle.toString()}
              </Text>
              <View style={styles.timeUserTribe}>
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
                  />
                </TouchableOpacity>
                <View>
                  <View style={styles.row}>
                    <Text style={styles.timeText}>by</Text>
                    <TouchableOpacity
                      onPress={() => {
                        this._subRedditBelow()
                      }}
                    >
                      <Text style={styles.username}>
                        {item.createdBy}
                      </Text>
                    </TouchableOpacity>
                    <Text style={styles.timeText}>in</Text>
                    <TouchableOpacity
                      onPress={() => {
                        this._subRedditBelow()
                      }}
                    >
                      <Text style={styles.subReddit}>
                        {item.subReddit}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.timeText}>
                    {item.time} ago
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    )
  }

  _renderFlatListOne = () => {
    return (
      <FlatList
        data={this.state.postData}
        keyExtractor={item => item.postId}
        ItemSeparatorComponent={() => (
          <View style={homeFeedStyle.separator} />
        )}
        ItemSeparatorComponent={() => (
          <View style={homeFeedStyle.separator} />
        )}
        onEndReachedThreshold={0.6}
        renderItem={({ item }) => (
          <View style={homeFeedStyle.post}>
            <View style={homeFeedStyle.leftColumn2}>
              <TouchableOpacity
                onPress={() => {
                  this._upVote(item.postId)
                }}
              >
                <Icon
                  name="arrow-up-bold-outline"
                  type="material-community"
                  color={Colors.ultraLightGrey}
                  size={22}
                />
              </TouchableOpacity>
              <Text
                style={homeFeedStyle.voteText}
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
                  name="arrow-down-bold-outline"
                  type="material-community"
                  color={Colors.ultraLightGrey}
                  size={22}
                />
              </TouchableOpacity>
            </View>
            <View style={homeFeedStyle.rightColumn}>
              <View
                style={homeFeedStyle.postTitleContainer}
              >
                <View>
                  <View
                    style={[
                      homeFeedStyle.timeUserTribe,
                      { marginBottom: hp('1%') },
                    ]}
                  >
                    <TouchableOpacity>
                      <Text style={styles.username}>
                        {item.createdBy}
                      </Text>
                    </TouchableOpacity>
                    <Text style={homeFeedStyle.pronoun}>
                      in
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        this._subRedditBelow()
                      }}
                    >
                      <Text style={homeFeedStyle.subReddit}>
                        {item.subReddit}
                      </Text>
                    </TouchableOpacity>
                    <Text style={homeFeedStyle.timeText}>
                      {item.time}
                    </Text>
                  </View>

                  <Text
                    style={[
                      homeFeedStyle.postTitle,
                      { width: wp('60%') },
                    ]}
                    onPress={() => {
                      navigate('PostDetail')
                    }}
                  >
                    {item.postTitle.toString().length > 65
                      ? `${item.postTitle
                          .toString()
                          .substr(0, 50)}...`
                      : item.postTitle.toString()}
                  </Text>
                  <View
                    style={[
                      styles.timeUserTribe,
                      { marginTop: hp('1%') },
                    ]}
                  >
                    <TouchableOpacity>
                      <Text style={styles.timeText}>
                        987 Comments
                      </Text>
                    </TouchableOpacity>
                    <Icon
                      name="dot-single"
                      type="entypo"
                      color={Colors.ultraLightGrey}
                      size={18}
                      containerStyle={styles.dot}
                    />
                    <TouchableOpacity>
                      <Text style={styles.timeText}>
                        save
                      </Text>
                    </TouchableOpacity>
                    <Icon
                      name="dot-single"
                      type="entypo"
                      color={Colors.ultraLightGrey}
                      size={18}
                      containerStyle={styles.dot}
                    />
                    <TouchableOpacity>
                      <Icon
                        name="flag-variant-outline"
                        type="material-community"
                        color={Colors.ultraLightGrey}
                        size={15}
                        containerStyle={styles.dot}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Image
                  style={[
                    homeFeedStyle.image,
                    {
                      marginBottom: hp('2%'),
                    },
                  ]}
                  source={{
                    uri: item.postImage,
                  }}
                />
              </View>
            </View>
          </View>
        )}
      />
    )
  }

  _renderFlatListFour = () => {
    return (
      <FlatList
        data={this.state.postData}
        keyExtractor={item => item.postId}
        ItemSeparatorComponent={() => (
          <View style={homeFeedStyle.separator} />
        )}
        ItemSeparatorComponent={() => (
          <View style={homeFeedStyle.separator} />
        )}
        onEndReachedThreshold={0.6}
        renderItem={({ item }) => (
          <View style={homeFeedStyle.post}>
            <View
              style={[
                homeFeedStyle.rightColumn,
                { marginLeft: wp('2.5%') },
              ]}
            >
              <View
                style={homeFeedStyle.postTitleContainer}
              >
                <Image
                  style={[
                    homeFeedStyle.image,
                    { marginBottom: hp('.5%') },
                  ]}
                  source={{
                    uri: item.postImage,
                  }}
                />
                <View>
                  <View
                    style={[
                      homeFeedStyle.timeUserTribe,
                      {
                        marginBottom: hp('1%'),
                      },
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
                        containerStyle={[
                          homeFeedStyle.avatar,
                          {
                            marginLeft: wp('2%'),
                          },
                        ]}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        this._subRedditBelow()
                      }}
                    >
                      <Text style={homeFeedStyle.subReddit}>
                        {item.subReddit}
                      </Text>
                    </TouchableOpacity>
                    <Text style={homeFeedStyle.timeText}>
                      {item.time}
                    </Text>
                  </View>
                  <Text
                    style={[
                      homeFeedStyle.postTitle,
                      {
                        width: wp('70%'),
                        marginLeft: wp('2%'),
                      },
                    ]}
                    onPress={() => {
                      navigate('PostDetail')
                    }}
                  >
                    {item.postTitle.toString().length > 65
                      ? `${item.postTitle
                          .toString()
                          .substr(0, 50)}...`
                      : item.postTitle.toString()}
                  </Text>
                  <View
                    style={[
                      styles.timeUserTribe2,
                      {
                        marginTop: hp('.5%'),
                        marginLeft: wp('1%'),
                      },
                    ]}
                  >
                    <TouchableOpacity>
                      <Text style={styles.timeText}>
                        {item.vote}
                      </Text>
                    </TouchableOpacity>
                    <Icon
                      name="dot-single"
                      type="entypo"
                      color={Colors.ultraLightGrey}
                      size={18}
                      containerStyle={styles.dot}
                    />
                    <TouchableOpacity>
                      <Text style={styles.timeText}>
                        987 Comments
                      </Text>
                    </TouchableOpacity>
                    <Icon
                      name="dot-single"
                      type="entypo"
                      color={Colors.ultraLightGrey}
                      size={18}
                      containerStyle={styles.dot}
                    />
                  </View>
                </View>
              </View>
              <View style={homeFeedStyle.bottomContainer}>
                <TouchableOpacity
                  style={homeFeedStyle.row}
                  onPress={() => {
                    this._upVote(item.postId)
                  }}
                >
                  <Icon
                    name="caretup"
                    type="antdesign"
                    color={Colors.primary}
                    size={14}
                    reverse
                    reverseColor={Colors.black}
                    containerStyle={styles.iconShadow}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={homeFeedStyle.row}
                  onPress={() => {
                    this._downVote(item.postId)
                  }}
                >
                  <Icon
                    name="caretdown"
                    type="antdesign"
                    color={Colors.primary}
                    size={14}
                    reverse
                    reverseColor={Colors.black}
                    containerStyle={styles.iconShadow}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={homeFeedStyle.row}>
                  <Icon
                    name="comment"
                    type="foundation"
                    color={Colors.primary}
                    size={14}
                    reverse
                    reverseColor={Colors.black}
                    containerStyle={styles.iconShadow}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={homeFeedStyle.row}>
                  <Icon
                    name="save"
                    type="entypo"
                    color={Colors.primary}
                    size={14}
                    reverse
                    reverseColor={Colors.black}
                    containerStyle={styles.iconShadow}
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
                    containerStyle={styles.iconShadow}
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
                    containerStyle={styles.iconShadow}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    )
  }

  render() {
    const {
      sideColumn,
      down,
      postData,
      design,
    } = this.state
    const { navigate } = this.props.navigation
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <View style={styles.container}>
            <Header
              onMenuPress={() => {
                this.props.navigation.toggleDrawer()
              }}
              onHeaderPress={async () => {
                await this.setState({
                  design: 'cool' ? 'mine' : 'cool',
                })
              }}
            />
            {theme === 'cool'
              ? this._renderCoolFlat()
              : theme === 'traditional'
              ? this._renderFlatListOne()
              : theme === 'moreTraditional'
              ? this._renderFlatListFour()
              : this._renderCoolFlat()}
          </View>
        )}
      </ThemeConsumer>
    )
  }
}
export default HomeFeedScreen
