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
import CheckBox from 'react-native-check-box'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import _ from 'lodash'
import { TextField } from 'react-native-material-textfield'
import ProgressBarAnimated from 'react-native-progress-bar-animated'
import zxcvbn from 'zxcvbn'

class SignUpScreen extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    fullName: '',
    error: false,
    passwordError: false,
    emailError: false,
    usernameError: false,
    confirmPasswordError: false,
    usernameErrorText: 'UserName has already been taken',
    confirmPasswordText: '',
    passwordErrorText: '',
    emailErrorText: 'email has already been taken',
    isChecked: false,
    confirmPassword: '',
    hidePassword: true,
    hideConfirmPassword: true,
    emailOk: false,
    usernameOk: false,
    progress: 0,
    suggestion: '',
    warning: '',
    score: '',
  }

  _login = async () => {
    await AsyncStorage.setItem(
      '@userToken:token',
      'authItem'
    )
    this.props.navigation.navigate('App')
  }

  _hidePassword = async () => {
    await this.setState({
      hidePassword: !this.state.hidePassword,
    })
  }

  _onPasswordChange = async text => {
    const evaluation = zxcvbn(text)
    await this.setState({
      password: text,
      suggestion: evaluation.feedback.suggestions[0],
      warning: evaluation.feedback.warning,
      score: evaluation.score,
    })
  }

  render() {
    const {
      email,
      password,
      firstName,
      lastName,
      username,
      fullName,
      passwordError,
      emailError,
      confirmPasswordError,
      passwordErrorText,
      emailErrorText,
      usernameErrorText,
      usernameError,
      error,
      isChecked,
      confirmPassword,
      hidePassword,
      hideConfirmPassword,
      emailOk,
      usernameOk,
      score,
      warning,
      suggestion,
    } = this.state
    const { navigate } = this.props.navigation

    return (
      <View style={styles.rootContainer}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.card}
        >
          <Text
            style={styles.logInText}
            onPress={() => {
              this._hidePassword()
            }}
          >
            Sign Up
          </Text>
          <Divider
            style={styles.marginBeteweenInputBoxes}
          />
          <View style={styles.normalBorder}>
            <View style={styles.transparentBorder}>
              <TextField
                label={'Full Name'}
                tintColor={'#888888'}
                labelPadding={0}
                lineWidth={0}
                activeLineWidth={0}
                inputContainerPadding={1}
                value={fullName}
                onChangeText={text =>
                  this.setState({ fullName: text })
                }
              />
              <View
                style={{
                  marginBottom: 25,
                }}
              />
            </View>

            <View style={{ width: 29 }} />
          </View>
          <Divider
            style={styles.marginBeteweenInputBoxes}
          />

          <View
            style={
              usernameOk
                ? styles.greenBorder
                : usernameError
                ? styles.redBorder
                : styles.normalBorder
            }
          >
            <View style={styles.transparentBorder}>
              <TextField
                label={
                  usernameError
                    ? usernameErrorText
                    : 'Username'
                }
                tintColor={
                  usernameError ? 'red' : '#888888'
                }
                labelPadding={0}
                lineWidth={0}
                activeLineWidth={0}
                inputContainerPadding={1}
                value={username}
                onChangeText={text =>
                  this.setState({ username: text })
                }
              />
              <View
                style={{
                  marginBottom: 25,
                }}
              />
            </View>
            {usernameError ? (
              <Icon
                name="warning"
                size={20}
                color="#DA291C"
              />
            ) : usernameOk ? (
              <Icon
                name="check"
                size={20}
                color="#428600"
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
                onChangeText={text =>
                  this.setState({ email: text })
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
              />
            ) : emailOk ? (
              <Icon
                name="check"
                size={20}
                color="#428600"
              />
            ) : (
              <View style={{ width: 20 }} />
            )}
            <View style={{ width: 9 }} />
          </View>
          <Divider
            style={styles.marginBeteweenInputBoxes}
          />
          <View style={styles.normalBorder}>
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
                  // this.setState({ password: text })
                  this._onPasswordChange(text)
                }
              />
              <View
                style={{
                  marginBottom: 25,
                }}
              />
            </View>
            {hidePassword ? (
              <Icon
                name="eye"
                type="entypo"
                size={20}
                color="grey"
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
                iconStyle={styles.icon}
                onPress={() =>
                  this.setState({
                    hidePassword: !hidePassword,
                  })
                }
              />
            )}
            <View style={{ width: 10 }} />
          </View>

          <View style={{ height: 10 }} />
          <ProgressBarAnimated
            width={wp('82%')}
            value={(score / 5) * 100}
            backgroundColor={
              score === 0
                ? 'red'
                : score === 1
                ? '#FA5E56'
                : score === 2
                ? '#00BEAB'
                : score === 3
                ? '#428600'
                : score === 4
                ? '#428600'
                : 'white'
            }
          />
          {warning != null ? (
            <Text style={styles.strengthText}>
              {warning}
            </Text>
          ) : null}
          <View style={styles.normalBorder}>
            <View style={styles.transparentBorder}>
              <TextField
                label={
                  confirmPasswordError
                    ? passwordErrorText
                    : 'Confirm Password'
                }
                tintColor={
                  confirmPasswordError ? 'red' : '#888888'
                }
                labelPadding={0}
                lineWidth={0}
                activeLineWidth={0}
                inputContainerPadding={1}
                value={confirmPassword}
                keyBoardType="password"
                secureTextEntry={hideConfirmPassword}
                onChangeText={text =>
                  this.setState({
                    confirmPassword: text,
                  })
                }
              />
              <View
                style={{
                  marginBottom: 25,
                }}
              />
            </View>
            {hideConfirmPassword ? (
              <Icon
                name="eye"
                size={20}
                type="entypo"
                color="grey"
                onPress={() =>
                  this.setState({
                    hideConfirmPassword: !hideConfirmPassword,
                  })
                }
              />
            ) : (
              <Icon
                name="eye-with-line"
                size={20}
                type="entypo"
                color="grey"
                iconStyle={styles.icon}
                onPress={() =>
                  this.setState({
                    hideConfirmPassword: !hideConfirmPassword,
                  })
                }
              />
            )}
            <View style={{ width: 10 }} />
          </View>

          <View style={styles.row}>
            <CheckBox
              style={styles.checkBox}
              onClick={() => {
                this.setState({
                  isChecked: !isChecked,
                })
              }}
              isChecked={isChecked}
              checkedCheckBoxColor="#6200EA"
              uncheckedCheckBoxColor="#F0F0F0"
            />
            <Text style={styles.terms}>
              I have read and agreed to the{' '}
              <Text style={styles.conditions}>
                terms and conditions
              </Text>
            </Text>
          </View>

          <Button
            title="Sign Up"
            buttonStyle={styles.button}
            backgroundColor="#333333"
            textStyle={styles.buttonText}
            onPress={() => {
              this._login()
            }}
          />

          <Text style={styles.forgotten}>
            Already have an account?{' '}
            <Text style={styles.loginUnderlined}>
              Log in.
            </Text>
          </Text>
        </KeyboardAwareScrollView>
      </View>
    )
  }
}
export default SignUpScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#6200EA',
    alignItems: 'center',
    height: hp('170%'),
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
  logInText: {
    fontSize: hp('3.6%'),
    fontWeight: 'bold',
    marginTop: hp('3.75%'),
    color: '#000000',
  },
  txtInput: {
    height: hp('9%'),
    width: wp('82%'),
    borderRadius: hp('.5%'),
    borderColor: '#E0E0E0',
    borderWidth: 2,
    backgroundColor: '#ffffff',
    textAlign: 'justify',
  },
  marginBeteweenInputBoxes: {
    marginTop: hp('3%'),
  },
  forgotten: {
    fontWeight: 'bold',
    fontSize: hp('1.8%'),
    color: 'black',
    marginTop: hp('3%'),
    marginBottom: hp('4.5%'),
  },
  button: {
    height: hp('7.5%'),
    width: wp('68%'),
    borderRadius: hp('.5%'),
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: hp('2%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  terms: {
    fontSize: 12,
    marginVertical: hp('3%'),
    color: '#888888',
  },
  conditions: {
    fontSize: 12,
    marginVertical: hp('3%'),
    color: 'black',
    fontWeight: '600',
  },
  checkBox: {
    height: 20,
    width: 20,
    marginBottom: 3,
    marginRight: 10,
  },
  loginUnderlined: {
    textDecorationLine: 'underline',
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
  strengthMeter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 12,
  },

  suggetionText: {
    color: '#d5a74f',
    marginVertical: 10,
    textAlign: 'center',
    width: wp('82%'),
  },
  strengthText: {
    color: 'red',
    marginBottom: 10,
    width: wp('82%'),
    textAlign: 'center',
  },
})
