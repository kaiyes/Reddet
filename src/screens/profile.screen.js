import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import {
  Avatar,
  Icon,
  Divider,
  SearchBar,
} from 'react-native-elements'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import { LinearGradient } from 'expo'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

import Colors from '../utils/Colors'

export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: '#fff' }}
      >
        <ScrollView style={styles.container}>
          <View style={styles.photoNameBox}>
            <View style={styles.name}>
              <TouchableOpacity
                style={styles.arrow}
                onPress={() => {
                  console.log('clicked')
                }}
              >
                <Icon
                  name="arrowleft"
                  type="antdesign"
                  color={Colors.anotherGrey}
                  size={45}
                />
              </TouchableOpacity>
              <Text style={styles.leadName}>ASHLEY</Text>
              <Text style={styles.leadSubtitle}>
                Lead stylist
              </Text>
            </View>
            <View style={styles.ViewContainer}>
              <Image
                source={require('../../assets/girl.png')}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.blocks}>
            <Text style={styles.heading}>
              HER STYLE IN 5 WORDS
            </Text>
            <Text style={styles.leadSubtitle2}>
              Timeless chic, laced with feminity
            </Text>
          </View>
          <View style={styles.blocks}>
            <Text style={styles.heading}>
              WHAT DESIGNER ARE YOU MOST EXCITED ABOUT ?
            </Text>
            <Text style={styles.leadSubtitle2}>Dior</Text>
          </View>
          <View style={styles.blocks}>
            <Text style={styles.heading}>
              IF YOU HAD TO WEAR ONE ITEM OF CLOTHING FOR
              THE REST OF YOUR LIFE, WHAT WOULD IT BE ?
            </Text>
            <Text style={styles.leadSubtitle2}>
              A great Alexander McQueen Blazer
            </Text>
          </View>
          <View style={styles.blocks}>
            <Text style={styles.heading}>
              what is one fashion rule you constantly ignore
              ?
            </Text>
            <Text style={styles.leadSubtitle2}>
              Tall women shouldn't wear heel
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  photoNameBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('2%'),
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.ultraLightGrey,
  },
  arrow: {
    marginBottom: hp('10%'),
    marginLeft: hp('-.5%'),
  },
  name: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: wp('5%'),
  },
  leadName: {
    fontSize: 25,
    fontWeight: '400',
    letterSpacing: hp('.4%'),
  },
  leadSubtitle: {
    color: 'grey',
    marginTop: hp('.5%'),
  },
  heading: {
    color: 'grey',
    letterSpacing: wp('.5%'),
    fontWeight: '500',
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'left',
  },
  leadSubtitle2: {
    color: 'black',
    marginTop: hp('1%'),
  },
  blocks: {
    height: hp('15%'),
    justifyContent: 'center',
    paddingLeft: wp('5%'),
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.ultraLightGrey,
  },
  image: {
    width: wp('50%'),
    height: hp('25%'),
  },
})
