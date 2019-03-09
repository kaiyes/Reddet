import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  AsyncStorage,
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { Button, Divider } from 'react-native-elements'
import Colors from '../utils/Colors'

export default class LandingScreen extends Component {
  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Socio</Text>
        <Divider style={styles.divider} />
        <Button
          title="Sign Up"
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
          onPress={() => {
            navigate('SignUp')
          }}
        />
        <Divider style={styles.secondDivider} />
        <Button
          title="Log in"
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
          onPress={() => {
            navigate('Login')
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.lightBlack,
    letterSpacing: -1,
    marginTop: hp('15%'),
  },
  secondHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: hp('9%'),
    color: '#FFD45C',
    textAlign: 'center',
  },
  thirdHeading: {
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
    marginTop: hp('1.5%'),
    color: 'white',
    textAlign: 'center',
  },
  button: {
    height: hp('7.5%'),
    width: wp('58.66%'),
    borderRadius: hp('.5%'),
    backgroundColor: 'black',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  divider: {
    marginTop: hp('9%'),
  },
  secondDivider: {
    marginTop: hp('1.5%'),
  },
  termsText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    marginTop: hp('4.5%'),
    color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
})
