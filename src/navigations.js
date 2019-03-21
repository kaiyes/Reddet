import React, { Component } from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  Text,
  StyleSheet,
} from 'react-native'
import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

import Drawer from './components/drawer.component'
import LandingScreen from './screens/Landing.screen'
import AuthLoadingScreen from './screens/authLoading.screen'
import HomeScreen from './screens/Home.screen'
import LoginScreen from './screens/Login.screen'
import SignUpScreen from './screens/signUp.screen'
import PostDetailScreen from './screens/PostDetails.screen'

import Colors from './utils/Colors'

const AuthStack = createStackNavigator({
  Landing: {
    screen: LandingScreen,
    navigationOptions: () => ({
      header: null,
      headerBackTitle: 'Go back',
    }),
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      headerTransparent: true,
      headerTitle: 'Socio',
      headerTintColor: 'white',
      headerTitleStyle: styles.headerTitle,
      headerBackTitleStyle: styles.goBack,
    }),
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: () => ({
      headerTransparent: true,
      headerTitle: 'Socio',
      headerTintColor: 'white',
      headerTitleStyle: styles.headerTitle,
      headerBackTitleStyle: styles.goBack,
    }),
  },
})

const PostStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  PostDetail: {
    screen: PostDetailScreen,
    navigationOptions: () => ({
      headerTransparent: true,
      headerTintColor: Colors.primary,
    }),
  },
})

const AppStack = createDrawerNavigator(
  {
    Home: PostStack,
  },
  {
    contentComponent: Drawer,
  }
)

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
)

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  goBack: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
})
