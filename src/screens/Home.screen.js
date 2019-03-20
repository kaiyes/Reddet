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
    sideColumn: true,
    down: false,
    postData: PostData,
    design: 'cool',
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
      down: !this.state.down,
    })
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
            <View style={homeFeedStyle.leftColumn}>
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
                  name="caretdown"
                  type="antdesign"
                  color={Colors.black}
                  size={10}
                  reverse
                />
              </TouchableOpacity>
            </View>
            <View style={homeFeedStyle.rightColumn}>
              <View
                style={homeFeedStyle.postTitleContainer}
              >
                <Image
                  style={[
                    homeFeedStyle.image,
                    { marginBottom: hp('2%') },
                  ]}
                  source={{
                    uri: item.postImage,
                  }}
                />
                <View>
                  <View
                    style={[
                      homeFeedStyle.timeUserTribe,
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
                        containerStyle={
                          homeFeedStyle.avatar
                        }
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
                      {item.time} ago
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
                    {item.postTitle.toString().length > 80
                      ? `${item.postTitle
                          .toString()
                          .substr(0, 70)}...`
                      : item.postTitle.toString()}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    )
  }

  _renderFlatListTwo = () => {
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
            <View style={homeFeedStyle.leftColumn}>
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
                  name="caretdown"
                  type="antdesign"
                  color={Colors.black}
                  size={10}
                  reverse
                />
              </TouchableOpacity>
            </View>
            <View style={homeFeedStyle.rightColumn}>
              <View
                style={homeFeedStyle.postTitleContainer}
              >
                <Image
                  style={[
                    homeFeedStyle.image,
                    { marginBottom: hp('2%') },
                  ]}
                  source={{
                    uri: item.postImage,
                  }}
                />
                <View>
                  <Text
                    style={[
                      homeFeedStyle.postTitle,
                      { width: wp('60%') },
                    ]}
                    onPress={() => {
                      navigate('PostDetail')
                    }}
                  >
                    {item.postTitle.toString().length > 80
                      ? `${item.postTitle
                          .toString()
                          .substr(0, 70)}...`
                      : item.postTitle.toString()}
                  </Text>
                  <View
                    style={[
                      homeFeedStyle.timeUserTribe,
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
                        containerStyle={
                          homeFeedStyle.avatar
                        }
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={homeFeedStyle.subReddit}>
                        {item.subReddit}
                      </Text>
                    </TouchableOpacity>
                    <Text style={homeFeedStyle.timeText}>
                      {item.time} ago
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    )
  }

  _renderFlatListThree = () => {
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
                  <Text
                    style={[
                      homeFeedStyle.postTitle,
                      { width: wp('70%') },
                    ]}
                    onPress={() => {
                      navigate('PostDetail')
                    }}
                  >
                    {item.postTitle.toString().length > 80
                      ? `${item.postTitle
                          .toString()
                          .substr(0, 70)}...`
                      : item.postTitle.toString()}
                  </Text>
                  <View
                    style={[
                      homeFeedStyle.timeUserTribe,
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
                        containerStyle={
                          homeFeedStyle.avatar
                        }
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={homeFeedStyle.subReddit}>
                        {item.subReddit}
                      </Text>
                    </TouchableOpacity>
                    <Text style={homeFeedStyle.timeText}>
                      {item.time} ago
                    </Text>
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
                <Text style={homeFeedStyle.commentText}>
                  {item.vote}
                </Text>
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
                  <Text style={homeFeedStyle.commentText}>
                    {item.comments}
                  </Text>
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
                        containerStyle={
                          homeFeedStyle.avatar
                        }
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
                      {item.time} ago
                    </Text>
                  </View>
                  <Text
                    style={[
                      homeFeedStyle.postTitle,
                      { width: wp('70%') },
                    ]}
                    onPress={() => {
                      navigate('PostDetail')
                    }}
                  >
                    {item.postTitle.toString().length > 80
                      ? `${item.postTitle
                          .toString()
                          .substr(0, 70)}...`
                      : item.postTitle.toString()}
                  </Text>
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
                <Text style={homeFeedStyle.commentText}>
                  {item.vote}
                </Text>
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
                  <Text style={homeFeedStyle.commentText}>
                    {item.comments}
                  </Text>
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
              : theme === 'traditional2'
              ? this._renderFlatListTwo()
              : theme === 'moreTraditional'
              ? this._renderFlatListThree()
              : theme === 'moreTraditional2'
              ? this._renderFlatListFour()
              : this._renderCoolFlat()}
          </View>
        )}
      </ThemeConsumer>
    )
  }
}
export default HomeFeedScreen

// _renderFlatListOne = () => {
//   return (
//     <FlatList
//       data={this.state.postData}
//       keyExtractor={item => item.postId}
//       ItemSeparatorComponent={() => (
//         <View style={homeFeedStyle.separator} />
//       )}
//       ItemSeparatorComponent={() => (
//         <View style={homeFeedStyle.separator} />
//       )}
//       onEndReachedThreshold={0.6}
//       renderItem={({ item }) => (
//         <View style={homeFeedStyle.post}>
//           {this.state.sideColumn ? (
//             <View style={homeFeedStyle.leftColumn}>
//               <TouchableOpacity
//                 onPress={() => {
//                   this._upVote(item.postId)
//                 }}
//               >
//                 <Icon
//                   name="caretup"
//                   type="antdesign"
//                   color={Colors.black}
//                   size={10}
//                   reverse
//                 />
//               </TouchableOpacity>
//               <Text
//                 style={homeFeedStyle.voteText}
//                 onPress={() => {
//                   this._logout()
//                 }}
//               >
//                 {item.vote}
//               </Text>
//               <TouchableOpacity
//                 onPress={() => {
//                   this._downVote(item.postId)
//                 }}
//               >
//                 <Icon
//                   name="caretdown"
//                   type="antdesign"
//                   color={Colors.black}
//                   size={10}
//                   reverse
//                 />
//               </TouchableOpacity>
//             </View>
//           ) : null}
//
//           <View
//             style={
//               this.state.sideColumn
//                 ? [homeFeedStyle.rightColumn]
//                 : [
//                     homeFeedStyle.rightColumn,
//                     { marginLeft: wp('2.5%') },
//                   ]
//             }
//           >
//             <View
//               style={homeFeedStyle.postTitleContainer}
//             >
//               <Image
//                 style={
//                   this.state.sideColumn
//                     ? [
//                         homeFeedStyle.image,
//                         { marginBottom: hp('2%') },
//                       ]
//                     : [
//                         homeFeedStyle.image,
//                         { marginBottom: hp('.5%') },
//                       ]
//                 }
//                 source={{
//                   uri: item.postImage,
//                 }}
//               />
//               <View>
//                 {this.state.down ? null : (
//                   <View
//                     style={[
//                       homeFeedStyle.timeUserTribe,
//                       { marginBottom: hp('1%') },
//                     ]}
//                   >
//                     <TouchableOpacity
//                       onPress={() => {
//                         console.log('avatar')
//                       }}
//                     >
//                       <Avatar
//                         rounded
//                         source={{
//                           uri: item.img,
//                         }}
//                         activeOpacity={0.7}
//                         containerStyle={
//                           homeFeedStyle.avatar
//                         }
//                       />
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                       onPress={() => {
//                         this._subRedditBelow()
//                       }}
//                     >
//                       <Text
//                         style={homeFeedStyle.subReddit}
//                       >
//                         {item.subReddit}
//                       </Text>
//                     </TouchableOpacity>
//                     <Text style={homeFeedStyle.timeText}>
//                       {item.time} ago
//                     </Text>
//                   </View>
//                 )}
//
//                 <Text
//                   style={
//                     this.state.sideColumn
//                       ? [
//                           homeFeedStyle.postTitle,
//                           { width: wp('60%') },
//                         ]
//                       : [
//                           homeFeedStyle.postTitle,
//                           { width: wp('70%') },
//                         ]
//                   }
//                   onPress={() => {
//                     navigate('PostDetail')
//                   }}
//                 >
//                   {item.postTitle.toString().length > 80
//                     ? `${item.postTitle
//                         .toString()
//                         .substr(0, 70)}...`
//                     : item.postTitle.toString()}
//                 </Text>
//                 {this.state.down ? (
//                   <View
//                     style={[
//                       homeFeedStyle.timeUserTribe,
//                       { marginTop: hp('.5%') },
//                     ]}
//                   >
//                     <TouchableOpacity
//                       onPress={() => {
//                         console.log('avatar')
//                       }}
//                     >
//                       <Avatar
//                         rounded
//                         source={{
//                           uri: item.postImage,
//                         }}
//                         activeOpacity={0.7}
//                         containerStyle={
//                           homeFeedStyle.avatar
//                         }
//                       />
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                       onPress={() => {
//                         this._subRedditBelow()
//                       }}
//                     >
//                       <Text
//                         style={homeFeedStyle.subReddit}
//                       >
//                         {item.subReddit}
//                       </Text>
//                     </TouchableOpacity>
//                     <Text style={homeFeedStyle.timeText}>
//                       {item.time} ago
//                     </Text>
//                   </View>
//                 ) : null}
//               </View>
//             </View>
//             {this.state.sideColumn ? null : (
//               <View style={homeFeedStyle.bottomContainer}>
//                 <TouchableOpacity
//                   style={homeFeedStyle.row}
//                   onPress={() => {
//                     this._upVote(item.postId)
//                   }}
//                 >
//                   <Icon
//                     name="caretup"
//                     type="antdesign"
//                     color={Colors.lightGrey}
//                     size={14}
//                     containerStyle={homeFeedStyle.upIcon}
//                   />
//                 </TouchableOpacity>
//                 <Text style={homeFeedStyle.commentText}>
//                   {item.vote}
//                 </Text>
//                 <TouchableOpacity
//                   style={homeFeedStyle.row}
//                   onPress={() => {
//                     this._downVote(item.postId)
//                   }}
//                 >
//                   <Icon
//                     name="caretdown"
//                     type="antdesign"
//                     color={Colors.lightGrey}
//                     size={14}
//                     containerStyle={
//                       homeFeedStyle.downIcon
//                     }
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={homeFeedStyle.row}
//                 >
//                   <Text style={homeFeedStyle.commentText}>
//                     {item.comments} comments
//                   </Text>
//                   <Icon
//                     name="comment"
//                     type="foundation"
//                     color={Colors.lightGrey}
//                     size={14}
//                     containerStyle={
//                       homeFeedStyle.commentIcon
//                     }
//                   />
//                 </TouchableOpacity>
//
//                 <TouchableOpacity
//                   style={homeFeedStyle.row}
//                 >
//                   <Text style={homeFeedStyle.commentText}>
//                     save
//                   </Text>
//                   <Icon
//                     name="save"
//                     type="entypo"
//                     color={Colors.lightGrey}
//                     size={14}
//                   />
//                 </TouchableOpacity>
//
//                 <TouchableOpacity
//                   style={homeFeedStyle.row}
//                 >
//                   <Text style={homeFeedStyle.commentText}>
//                     share
//                   </Text>
//                   <Icon
//                     name="md-share-alt"
//                     type="ionicon"
//                     color={Colors.lightGrey}
//                     size={14}
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={homeFeedStyle.row}
//                 >
//                   <Text style={homeFeedStyle.commentText}>
//                     report
//                   </Text>
//                   <Icon
//                     name="report-problem"
//                     type="material"
//                     color={Colors.lightGrey}
//                     size={14}
//                   />
//                 </TouchableOpacity>
//               </View>
//             )}
//           </View>
//         </View>
//       )}
//     />
//   )
// }

// ####################################################
// ####################################################
// ####################################################

// {this.state.sideColumn ? null : (
//   <View style={homeFeedStyle.bottomContainer}>
//     <TouchableOpacity
//       style={homeFeedStyle.row}
//       onPress={() => {
//         this._upVote(item.postId)
//       }}
//     >
//       <Icon
//         name="caretup"
//         type="antdesign"
//         color={Colors.lightGrey}
//         size={14}
//         containerStyle={homeFeedStyle.upIcon}
//       />
//     </TouchableOpacity>
//     <Text style={homeFeedStyle.commentText}>
//       {item.vote}
//     </Text>
//     <TouchableOpacity
//       style={homeFeedStyle.row}
//       onPress={() => {
//         this._downVote(item.postId)
//       }}
//     >
//       <Icon
//         name="caretdown"
//         type="antdesign"
//         color={Colors.lightGrey}
//         size={14}
//         containerStyle={
//           homeFeedStyle.downIcon
//         }
//       />
//     </TouchableOpacity>
//     <TouchableOpacity
//       style={homeFeedStyle.row}
//     >
//       <Text style={homeFeedStyle.commentText}>
//         {item.comments} comments
//       </Text>
//       <Icon
//         name="comment"
//         type="foundation"
//         color={Colors.lightGrey}
//         size={14}
//         containerStyle={
//           homeFeedStyle.commentIcon
//         }
//       />
//     </TouchableOpacity>
//
//     <TouchableOpacity
//       style={homeFeedStyle.row}
//     >
//       <Text style={homeFeedStyle.commentText}>
//         save
//       </Text>
//       <Icon
//         name="save"
//         type="entypo"
//         color={Colors.lightGrey}
//         size={14}
//       />
//     </TouchableOpacity>
//
//     <TouchableOpacity
//       style={homeFeedStyle.row}
//     >
//       <Text style={homeFeedStyle.commentText}>
//         share
//       </Text>
//       <Icon
//         name="md-share-alt"
//         type="ionicon"
//         color={Colors.lightGrey}
//         size={14}
//       />
//     </TouchableOpacity>
//     <TouchableOpacity
//       style={homeFeedStyle.row}
//     >
//       <Text style={homeFeedStyle.commentText}>
//         report
//       </Text>
//       <Icon
//         name="report-problem"
//         type="material"
//         color={Colors.lightGrey}
//         size={14}
//       />
//     </TouchableOpacity>
//   </View>
// )}
