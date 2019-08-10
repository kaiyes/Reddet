import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import {
  Button,
  Divider,
  Icon,
} from 'react-native-elements'
import CheckBox from 'react-native-check-box'
import _ from 'lodash'
import Colors from '../utils/Colors'

class SignUpScreen extends Component {
  state = {}

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.rootContainer}>
        <Text
          style={styles.textContainer}
          onPress={() => {
            navigate('ProfilePage')
          }}
        >
          settings
        </Text>
      </View>
    )
  }
}
export default SignUpScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
