import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native'
import {
  Avatar,
  Icon,
  SearchBar,
} from 'react-native-elements'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

import styles from '../utils/styles/homeFeed.style'
import Colors from '../utils/Colors'

class FlatListItem extends Component {
  state = {
    searchText: '',
  }

  _deleteTribe = () => {
    console.log('tribe clicked')
  }

  render() {
    const { searchText } = this.state

    return (
      <FlatList
        data={this.props.postData}
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
            <View style={styles.leftColumn}>
              <TouchableOpacity onPress={this.props.upVote}>
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
                onPress={this.props.logOut}
              >
                {item.vote}
              </Text>
              <TouchableOpacity
                onPress={this.props.downVote}
              >
                <Icon
                  name="caretdown"
                  type="antdesign"
                  color={Colors.primary}
                  size={10}
                  reverse
                  reverseColor={Colors.grey}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.rightColumn}>
              <View style={styles.postTitleContainer}>
                <Image
                  style={[
                    styles.image,
                    { marginBottom: hp('2%') },
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
}
export default FlatListItem
