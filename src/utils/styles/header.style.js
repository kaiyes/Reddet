import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import Colors from '../Colors'

export default StyleSheet.create({
  header: {
    marginTop: hp('3.5%'),
    height: hp('5%'),
    width: wp('100%'),
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    color: Colors.lightBlack,
    fontWeight: 'bold',
    letterSpacing: wp('1.7%'),
    marginLeft: wp('32%'),
  },
  profileIcon: {
    marginRight: wp('2.5%'),
  },
  menuIcon: {
    marginLeft: wp('3.2%'),
  },
})
