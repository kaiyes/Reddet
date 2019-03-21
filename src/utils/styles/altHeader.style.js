import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import Colors from '../Colors'

export default StyleSheet.create({
  header: {
    marginTop: hp('4%'),
    width: wp('100%'),
    backgroundColor: Colors.primary,
    borderBottomWidth: 2,
    borderBottomColor: Colors.grey,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'red',
    marginHorizontal: wp('4%'),
    marginTop: hp('.5%'),
  },
  headerText: {
    fontSize: 25,
    color: Colors.black,
    fontWeight: 'bold',
    letterSpacing: wp('.5%'),
    marginBottom: hp('1%'),
  },
  menu: {
    marginRight: wp('1%'),
    marginBottom: hp('.3%'),
  },
})
