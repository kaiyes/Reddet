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
  createBottomTabNavigator,
} from 'react-navigation'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { Icon } from 'react-native-elements'

import Drawer from './components/drawer.component'
import LandingScreen from './screens/Landing.screen'
import AuthLoadingScreen from './screens/authLoading.screen'
import HomeScreen from './screens/Home.screen'
import LoginScreen from './screens/Login.screen'
import SignUpScreen from './screens/signUp.screen'
import PostDetailScreen from './screens/PostDetails.screen'
import SearchScreen from './screens/Search.screen'

import Colors from './utils/Colors'

const AuthNavigator = createStackNavigator({
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

const TabNavigator = createBottomTabNavigator(
  {
    Posts: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: 'Posts',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="layers"
            type="simple-line-icon"
            color={Colors.ultraLightGrey}
            containerStyle={styles.marginTop}
            size={18}
          />
        ),
      }),
    },
    Subreddits: {
      screen: SearchScreen,
      navigationOptions: () => ({
        title: 'SubReddits',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="magnifier"
            type="simple-line-icon"
            color={Colors.ultraLightGrey}
            containerStyle={styles.marginTop}
            size={18}
          />
        ),
      }),
    },
    InBox: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: 'InBox',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="speech"
            type="simple-line-icon"
            color={Colors.ultraLightGrey}
            containerStyle={styles.marginTop}
            size={18}
          />
        ),
      }),
    },
    Profile: {
      screen: SearchScreen,
      navigationOptions: () => ({
        title: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="user"
            type="simple-line-icon"
            color={Colors.ultraLightGrey}
            containerStyle={styles.marginTop}
            size={18}
          />
        ),
      }),
    },
    Settings: {
      screen: SearchScreen,
      navigationOptions: () => ({
        title: 'Settings',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="settings"
            type="simple-line-icon"
            color={Colors.ultraLightGrey}
            containerStyle={styles.marginTop}
            size={18}
          />
        ),
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.tintColor,
      inactiveTintColor: 'gray',
    },
  }
)

const AppNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
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

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppNavigator,
      Auth: AuthNavigator,
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
  marginTop: {
    marginTop: hp('.5%'),
  },
})
