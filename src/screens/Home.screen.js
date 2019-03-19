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
import Header from '../components/altHeader.component'
// import Header from '../components/header.component'
import Colors from '../utils/Colors'
import PostData from '../utils/postData'

class HomeFeedScreen extends Component {
  state = {
    sideColumn: true,
    down: false,
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

  _subRedditBelow = async () => {
    await this.setState({
      down: !this.state.down,
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

        <FlatList
          data={postData}
          keyExtractor={item => item.postId}
          onEndReachedThreshold={0.6}
          renderItem={({ item }) => (
            <View style={styles.post}>
              <View style={styles.leftColumn}>
                <TouchableOpacity
                  onPress={this.props.upVote}
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
                  onPress={this.props.logOut}
                >
                  {item.vote}
                </Text>
                <TouchableOpacity
                  onPress={this.props.downVote}
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

                <TouchableOpacity
                  onPress={this.props.downVote}
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
                <TouchableOpacity
                  onPress={this.props.downVote}
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
                <TouchableOpacity
                  onPress={this.props.downVote}
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
                  {item.postTitle}
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
                      <Text style={styles.timeText}>
                        by
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          this._subRedditBelow()
                        }}
                      >
                        <Text style={styles.username}>
                          {item.createdBy}
                        </Text>
                      </TouchableOpacity>
                      <Text style={styles.timeText}>
                        in
                      </Text>
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
      </View>
    )
  }
}
export default HomeFeedScreen

// ItemSeparatorComponent={() => (
//   <View style={styles.separator} />
// )}

// <Image
//   style={[
//     styles.image,
//     { marginBottom: hp('2%') },
//   ]}
//   source={{
//     uri: item.postImage,
//   }}
// />

// _renderFlatListOne = () => {
//   const { postData } = this.state
//   return (
//     <FlatList
//       data={postData}
//       keyExtractor={item => item.postId}
//       ItemSeparatorComponent={() => (
//         <View style={styles.separator} />
//       )}
//       ItemSeparatorComponent={() => (
//         <View style={styles.separator} />
//       )}
//       onEndReachedThreshold={0.6}
//       renderItem={({ item }) => (
//         <View style={styles.post}>
//           <View style={styles.leftColumn}>
//             <TouchableOpacity
//               onPress={() => {
//                 console.log('onpress works')
//               }}
//             >
//               <Icon
//                 name="caretup"
//                 type="antdesign"
//                 color={Colors.black}
//                 size={10}
//                 reverse
//               />
//             </TouchableOpacity>
//             <Text
//               style={styles.voteText}
//               onPress={() => {
//                 console.log('onpress works')
//               }}
//             >
//               {item.vote}
//             </Text>
//             <TouchableOpacity
//               onPress={this.props.downVote}
//             >
//               <Icon
//                 name="caretdown"
//                 type="antdesign"
//                 color={Colors.black}
//                 size={10}
//                 reverse
//               />
//             </TouchableOpacity>
//           </View>
//           <View style={styles.rightColumn}>
//             <View style={styles.postTitleContainer}>
//               <Image
//                 style={[
//                   styles.image,
//                   { marginBottom: hp('2%') },
//                 ]}
//                 source={{
//                   uri: item.postImage,
//                 }}
//               />
//             </View>
//           </View>
//         </View>
//       )}
//     />
//   )
// // }

// ########################################
// ########################################
// ########################################

// <FlatList
//   data={postData}
//   keyExtractor={item => item.postId}
//   ItemSeparatorComponent={() => (
//     <View style={styles.separator} />
//   )}
//   ItemSeparatorComponent={() => (
//     <View style={styles.separator} />
//   )}
//   onEndReachedThreshold={0.6}
//   renderItem={({ item }) => (
//     <View style={styles.post}>
//       {sideColumn ? (
//         <View style={styles.leftColumn}>
//           <TouchableOpacity
//             onPress={() => {
//               this._upVote(item.postId)
//             }}
//           >
//             <Icon
//               name="caretup"
//               type="antdesign"
//               color={Colors.black}
//               size={10}
//               reverse
//             />
//           </TouchableOpacity>
//           <Text
//             style={styles.voteText}
//             onPress={() => {
//               this._logout()
//             }}
//           >
//             {item.vote}
//           </Text>
//           <TouchableOpacity
//             onPress={() => {
//               this._downVote(item.postId)
//             }}
//           >
//             <Icon
//               name="caretdown"
//               type="antdesign"
//               color={Colors.black}
//               size={10}
//               reverse
//             />
//           </TouchableOpacity>
//         </View>
//       ) : null}
//
//       <View
//         style={
//           sideColumn
//             ? [styles.rightColumn]
//             : [
//                 styles.rightColumn,
//                 { marginLeft: wp('2.5%') },
//               ]
//         }
//       >
//         <View style={styles.postTitleContainer}>
//           <Image
//             style={
//               sideColumn
//                 ? [
//                     styles.image,
//                     { marginBottom: hp('2%') },
//                   ]
//                 : [
//                     styles.image,
//                     { marginBottom: hp('.5%') },
//                   ]
//             }
//             source={{
//               uri: item.postImage,
//             }}
//           />
//           <View>
//             {down ? null : (
//               <View
//                 style={[
//                   styles.timeUserTribe,
//                   { marginBottom: hp('1%') },
//                 ]}
//               >
//                 <TouchableOpacity
//                   onPress={() => {
//                     console.log('avatar')
//                   }}
//                 >
//                   <Avatar
//                     rounded
//                     source={{
//                       uri: item.img,
//                     }}
//                     activeOpacity={0.7}
//                     containerStyle={styles.avatar}
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   onPress={() => {
//                     this._subRedditBelow()
//                   }}
//                 >
//                   <Text style={styles.subReddit}>
//                     {item.subReddit}
//                   </Text>
//                 </TouchableOpacity>
//                 <Text style={styles.timeText}>
//                   {item.time} ago
//                 </Text>
//               </View>
//             )}
//
//             <Text
//               style={
//                 sideColumn
//                   ? [
//                       styles.postTitle,
//                       { width: wp('60%') },
//                     ]
//                   : [
//                       styles.postTitle,
//                       { width: wp('70%') },
//                     ]
//               }
//               onPress={() => {
//                 navigate('PostDetail')
//               }}
//             >
//               {item.postTitle.toString().length >
//               80
//                 ? `${item.postTitle
//                     .toString()
//                     .substr(0, 70)}...`
//                 : item.postTitle.toString()}
//             </Text>
//             {down ? (
//               <View
//                 style={[
//                   styles.timeUserTribe,
//                   { marginTop: hp('.5%') },
//                 ]}
//               >
//                 <TouchableOpacity
//                   onPress={() => {
//                     console.log('avatar')
//                   }}
//                 >
//                   <Avatar
//                     rounded
//                     source={{
//                       uri: item.postImage,
//                     }}
//                     activeOpacity={0.7}
//                     containerStyle={styles.avatar}
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   onPress={() => {
//                     this._subRedditBelow()
//                   }}
//                 >
//                   <Text style={styles.subReddit}>
//                     {item.subReddit}
//                   </Text>
//                 </TouchableOpacity>
//                 <Text style={styles.timeText}>
//                   {item.time} ago
//                 </Text>
//               </View>
//             ) : null}
//           </View>
//         </View>
//         {sideColumn ? null : (
//           <View style={styles.bottomContainer}>
//             <TouchableOpacity
//               style={styles.row}
//               onPress={() => {
//                 this._upVote(item.postId)
//               }}
//             >
//               <Icon
//                 name="caretup"
//                 type="antdesign"
//                 color={Colors.lightGrey}
//                 size={14}
//                 containerStyle={styles.upIcon}
//               />
//             </TouchableOpacity>
//             <Text style={styles.commentText}>
//               {item.vote}
//             </Text>
//             <TouchableOpacity
//               style={styles.row}
//               onPress={() => {
//                 this._downVote(item.postId)
//               }}
//             >
//               <Icon
//                 name="caretdown"
//                 type="antdesign"
//                 color={Colors.lightGrey}
//                 size={14}
//                 containerStyle={styles.downIcon}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.row}>
//               <Text style={styles.commentText}>
//                 {item.comments} comments
//               </Text>
//               <Icon
//                 name="comment"
//                 type="foundation"
//                 color={Colors.lightGrey}
//                 size={14}
//                 containerStyle={
//                   styles.commentIcon
//                 }
//               />
//             </TouchableOpacity>
//
//             <TouchableOpacity style={styles.row}>
//               <Text style={styles.commentText}>
//                 save
//               </Text>
//               <Icon
//                 name="save"
//                 type="entypo"
//                 color={Colors.lightGrey}
//                 size={14}
//               />
//             </TouchableOpacity>
//
//             <TouchableOpacity style={styles.row}>
//               <Text style={styles.commentText}>
//                 share
//               </Text>
//               <Icon
//                 name="md-share-alt"
//                 type="ionicon"
//                 color={Colors.lightGrey}
//                 size={14}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.row}>
//               <Text style={styles.commentText}>
//                 report
//               </Text>
//               <Icon
//                 name="report-problem"
//                 type="material"
//                 color={Colors.lightGrey}
//                 size={14}
//               />
//             </TouchableOpacity>
//           </View>
//         )}
//       </View>
//     </View>
//   )}
// />

// ####################################################
// ####################################################
// ####################################################

// <FlatList
//   data={postData}
//   keyExtractor={item => item.postId}
//   ItemSeparatorComponent={() => (
//     <View style={styles.separator} />
//   )}
//   ItemSeparatorComponent={() => (
//     <View style={styles.separator} />
//   )}
//   onEndReachedThreshold={0.6}
//   renderItem={({ item }) => (
//     <View style={styles.post}>
//       <View style={styles.leftColumn}>
//         <TouchableOpacity
//           onPress={this.props.upVote}
//         >
//           <Icon
//             name="caretup"
//             type="antdesign"
//             color={Colors.black}
//             size={10}
//             reverse
//           />
//         </TouchableOpacity>
//         <Text
//           style={styles.voteText}
//           onPress={this.props.logOut}
//         >
//           {item.vote}
//         </Text>
//         <TouchableOpacity
//           onPress={this.props.downVote}
//         >
//           <Icon
//             name="caretdown"
//             type="antdesign"
//             color={Colors.primary}
//             size={10}
//             reverse
//             reverseColor={Colors.grey}
//           />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.rightColumn}>
//         <View style={styles.postTitleContainer}>
//           <Image
//             style={[
//               styles.image,
//               { marginBottom: hp('2%') },
//             ]}
//             source={{
//               uri: item.postImage,
//             }}
//           />
//         </View>
//       </View>
//     </View>
//   )}
// />
