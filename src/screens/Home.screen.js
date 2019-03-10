import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
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
    postTitle:
      'From Software Has Made sekiro which is about to come out in 2 weeks, Cant wait',
    sideColumn: true,
  }
  componentDidMount() {
    console.log(this.state.sideColumn)
  }
  render() {
    const { postTitle, sideColumn } = this.state
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
            console.log(sideColumn)
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
                {sideColumn ? (
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
                      style={styles.image}
                      source={{
                        uri:
                          'https://speckyboy.com/wp-content/uploads/2014/07/flat_web_design_13.jpg',
                      }}
                    />
                    <View>
                      <View style={styles.timeUserTribe}>
                        <TouchableOpacity
                          onPress={() => {
                            console.log('avatar')
                          }}
                        >
                          <Avatar
                            rounded
                            source={{
                              uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
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
                            r/Keyboard
                          </Text>
                        </TouchableOpacity>
                        <Text style={styles.timeText}>
                          2 min ago
                        </Text>
                      </View>
                      <Text
                        style={styles.postTitle}
                        onPress={() => {
                          navigate('PostDetail')
                        }}
                      >
                        {postTitle.length > 80
                          ? `${postTitle
                              .toString()
                              .substr(0, 70)}...`
                          : postTitle}
                      </Text>
                    </View>
                  </View>
                  {sideColumn ? null : (
                    <View style={styles.bottomContainer}>
                      <TouchableOpacity style={styles.row}>
                        <Icon
                          name="caretup"
                          type="antdesign"
                          color={Colors.lightGrey}
                          size={14}
                          containerStyle={styles.upIcon}
                        />
                      </TouchableOpacity>
                      <Text style={styles.commentText}>
                        888
                      </Text>
                      <TouchableOpacity style={styles.row}>
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
                          888 comments
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
