import { StyleSheet, Platform } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import Colors from '../Colors'
export default StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
  },
  secondContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('3%'),
  },
  userBox: {
    backgroundColor: Colors.primary,
    height: hp('14.2%'),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: wp('75%'),
  },
  headerText: {
    fontSize: 14,
    color: 'black',
    letterSpacing: wp('1.7%'),
  },
  searchBox: {
    backgroundColor: '#212121',
    height: hp('12%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Platform.OS === 'ios' ? null : wp('1%'),
  },

  avatar: {
    marginLeft: wp('5.3%'),
  },
  nameHolder: {
    marginLeft: wp('3%'),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: hp('.3%'),
  },
  innerBadge: {
    paddingHorizontal: wp('1%'),
    paddingVertical: hp('.2%'),
    flexDirection: 'row',
  },
  firstBadge: {
    backgroundColor: '#555555',
    borderRadius: wp('1.3%'),
  },
  badge: {
    backgroundColor: '#555555',
    borderRadius: wp('1.3%'),
    marginLeft: wp('1%'),
  },
  badgeText: {
    fontSize: 9,
    color: 'white',
    paddingHorizontal: wp('.5%'),
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  authorText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  searchBar: {
    backgroundColor: '#333333',
    paddingHorizontal: wp('2.7%'),
    width: wp('65%'),
    height: hp('7.5%'),
    borderBottomColor: '#333333',
    borderTopColor: '#333333',
  },
  icon: {
    paddingRight: wp('3%'),
  },
  inputText: {
    color: 'white',
  },
  line: {
    height: hp('.1%'),
    width: wp('75%'),
    backgroundColor: '#555555',
  },
  settingsText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: wp('5.8%'),
  },
  tribeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: wp('5.3%'),
  },
  editText: {
    fontSize: 14,
    color: '#555555',
    marginLeft: wp('30%'),
  },
  settingsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: wp('5.5%'),
    marginBottom: hp('5%'),
  },
  settingsContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: wp('75%'),
    backgroundColor: '#333333',
  },
  horizontalGap: {
    width: wp('2.7%'),
  },
  verticalGap: {
    width: wp('75%'),
    height: hp('5%'),
    backgroundColor: '#333333',
  },
  tribeContainer: {
    width: wp('75%'),
    height: hp('120%'),
    backgroundColor: '#333333',
  },
  tribeHeader: {
    flexDirection: 'row',
    marginTop: hp('5%'),
    marginLeft: wp('4.5%'),
    marginBottom: hp('3.75%'),
    width: wp('75%'),
  },
  tribeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('4.2%'),
  },
  blackBadge: {
    backgroundColor: '#000000',
    borderRadius: wp('.5%'),
    marginLeft: wp('14.5%'),
  },
  tribeRowText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#999999',
    marginLeft: wp('5.3%'),
  },
  crossIcon: {
    position: 'absolute',
    marginLeft: wp('66%'),
  },
  findMoreText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: wp('2%'),
  },
  findMoreContainer: {
    marginLeft: wp('14.5%'),
    flexDirection: 'row',
    marginBottom: hp('4.2%'),
  },
})
