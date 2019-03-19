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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderBottomWidth: 2,
    borderBottomColor: Colors.grey,
  },
  headerText: {
    fontSize: 25,
    color: Colors.black,
    fontWeight: 'bold',
    letterSpacing: wp('.5%'),
    marginLeft: wp('3.2%'),
    marginBottom: hp('1%'),
    marginTop: hp('.5%'),
  },
  profileIcon: {
    marginRight: wp('2.5%'),
  },
  menuIcon: {
    marginLeft: wp('3.2%'),
  },
  row: {
    flexDirection: 'row',
  },
})

// headerMiddleText: {
//   fontSize: 16,
//   color: Colors.lightBlack,
//   fontWeight: 'bold',
//   letterSpacing: wp('1.7%'),
//   marginLeft: wp('32%'),
// },
