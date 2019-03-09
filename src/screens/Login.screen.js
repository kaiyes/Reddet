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

import {
  Button,
  Divider,
  Icon,
} from 'react-native-elements'
import _ from 'lodash'
import { TextField } from 'react-native-material-textfield'

export default class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
    emailError: false,
    emailErrorText: '',
    passwordError: false,
    passwordErrorText: '',
    emailOk: false,
    error: false,
    hidePassword: true,
  }

  _signIn = async () => {
    this.props.navigation.navigate('App')
  }

  render() {
    const {
      email,
      password,
      emailError,
      emailErrorText,
      passwordErrorText,
      passwordError,
      emailOk,
      error,
      hidePassword,
    } = this.state

    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.welcomeText}>
            Welcome back!
          </Text>
          <Text style={styles.logInText}>Log In</Text>
          <Divider style={styles.marginForTopInputBox} />
          <View
            style={
              emailOk
                ? styles.greenBorder
                : emailError
                ? styles.redBorder
                : styles.normalBorder
            }
          >
            <View style={styles.transparentBorder}>
              <TextField
                label={
                  emailError ? emailErrorText : 'Email'
                }
                tintColor={emailError ? 'red' : '#888888'}
                labelPadding={0}
                lineWidth={0}
                activeLineWidth={0}
                inputContainerPadding={1}
                value={email}
                keyBoardType="password"
                autoCapitalize="none"
                onChangeText={text =>
                  this.setState({
                    email: text,
                    emailError: false,
                  })
                }
              />
              <View
                style={{
                  marginBottom: 25,
                }}
              />
            </View>
            {emailError ? (
              <Icon
                name="warning"
                size={20}
                color="#DA291C"
                containerStyle={styles.icon}
              />
            ) : emailOk ? (
              <Icon
                name="check"
                size={20}
                color="#428600"
                containerStyle={styles.icon}
              />
            ) : (
              <View style={{ width: 20 }} />
            )}
            <View style={{ width: 9 }} />
          </View>
          <Divider
            style={styles.marginBeteweenInputBoxes}
          />
          <View
            style={
              passwordError
                ? styles.redBorder
                : styles.normalBorder
            }
          >
            <View style={styles.transparentBorder}>
              <TextField
                label={
                  passwordError
                    ? passwordErrorText
                    : 'Password'
                }
                tintColor={
                  passwordError ? 'red' : '#888888'
                }
                labelPadding={0}
                lineWidth={0}
                activeLineWidth={0}
                inputContainerPadding={1}
                value={password}
                keyBoardType="password"
                secureTextEntry={hidePassword}
                onChangeText={text =>
                  this.setState({
                    password: text,
                    passwordError: false,
                  })
                }
              />
              <View
                style={{
                  marginBottom: 25,
                }}
              />
            </View>
            {passwordError ? (
              <Icon
                name="warning"
                size={20}
                color="#DA291C"
                containerStyle={styles.icon}
              />
            ) : hidePassword ? (
              <Icon
                name="eye"
                type="entypo"
                size={20}
                color="grey"
                containerStyle={styles.icon}
                onPress={() =>
                  this.setState({
                    hidePassword: !hidePassword,
                  })
                }
              />
            ) : (
              <Icon
                name="eye-with-line"
                type="entypo"
                size={20}
                color="grey"
                containerStyle={styles.icon}
                onPress={() =>
                  this.setState({
                    hidePassword: !hidePassword,
                  })
                }
              />
            )}
            <View style={{ width: 10 }} />
          </View>

          <Button
            title="Log in"
            buttonStyle={styles.button}
            backgroundColor="#333333"
            titleStyle={styles.buttonText}
            onPress={async () => {
              await this.setState({
                passwordError: false,
                passwordErrorText: '',
                emailError: false,
                emailErrorText: '',
              })

              if (
                _.isEmpty(email) ||
                password.length < 6 ||
                _.isEmpty(password)
              ) {
                _.isEmpty(email)
                  ? this.setState({
                      emailError: true,
                      emailErrorText:
                        'Email is a required field',
                    })
                  : null
                password.length < 6
                  ? this.setState({
                      passwordError: true,
                      passwordErrorText:
                        'At least 6 character long',
                    })
                  : null
                _.isEmpty(password)
                  ? this.setState({
                      passwordError: true,
                      passwordErrorText:
                        'Password is a required field',
                    })
                  : null
              } else {
                navigate('App')
              }
            }}
          />

          <Text style={styles.forgotten}>
            I've forgotten my password
          </Text>
        </View>
        <Text style={styles.noAccount}>
          Don't have an account?
        </Text>
        <Button
          title="Sign up!"
          buttonStyle={styles.signUpButton}
          titleStyle={styles.yellowButtonText}
          onPress={() => {
            navigate('SignUp')
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
    backgroundColor: '#6200EA',
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#6200EA',
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: hp('11%'),
    width: wp('92%'),
    borderRadius: hp('.5%'),
    shadowOffset: { width: 0, height: hp('1.5%') },
    shadowColor: 'rgb(38, 50, 56)',
    shadowOpacity: 0.19,
  },
  welcomeText: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    marginTop: hp('4.5%'),
    color: '#000000',
  },
  logInText: {
    fontSize: hp('3.6%'),
    fontWeight: 'bold',
    marginTop: hp('3%'),
    color: '#000000',
  },
  marginForTopInputBox: {
    marginTop: hp('3%'),
  },
  txtInput: {
    height: hp('9%'),
    borderRadius: hp('.5%'),
    borderColor: '#E0E0E0',
    borderWidth: 2,
    backgroundColor: '#ffffff',
    width: wp('82%'),
    textAlign: 'justify',
  },
  marginBeteweenInputBoxes: {
    marginTop: hp('3%'),
  },
  button: {
    height: hp('7.5%'),
    width: wp('68%'),
    borderRadius: hp('.5%'),
    marginTop: hp('4.5%'),
    backgroundColor: 'black',
  },
  signUpButton: {
    height: hp('7.5%'),
    width: wp('68%'),
    borderRadius: hp('.5%'),
    marginTop: hp('4.5%'),
    backgroundColor: '#FFD45C',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: hp('2%'),
  },
  forgotten: {
    fontWeight: 'bold',
    fontSize: hp('1.8%'),
    color: 'black',
    marginVertical: hp('4.5%'),
  },
  noAccount: {
    fontSize: hp('1.7%'),
    fontWeight: 'bold',
    marginTop: hp('4.5%'),
    color: 'white',
  },
  yellowButtonText: {
    fontWeight: 'bold',
    fontSize: hp('2%'),
    color: 'black',
  },
  transparentBorder: {
    height: hp('9%'),
    width: wp('72.5%'),
    padding: 10,
    justifyContent: 'center',
  },
  normalBorder: {
    flexDirection: 'row',
    borderRadius: hp('.5%'),
    borderColor: '#E0E0E0',
    borderWidth: 2,
  },
  greenBorder: {
    flexDirection: 'row',
    borderRadius: hp('.5%'),
    borderColor: '#428600',
    borderWidth: 2,
  },
  redBorder: {
    flexDirection: 'row',
    borderRadius: hp('.5%'),
    borderColor: '#DA291C',
    borderWidth: 2,
  },
  icon: {
    paddingTop: 20,
  },
})
