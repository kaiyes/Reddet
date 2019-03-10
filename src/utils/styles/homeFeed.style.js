import { StyleSheet, Platform } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import Colors from '../Colors'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  postContainer: {
    backgroundColor: Colors.primary,
  },
  separator: {
    width: wp('98%'),
    height: hp('1%'),
  },
  post: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    borderTopLeftRadius: hp('1%'),
    borderTopRightRadius: hp('1%'),
    borderBottomLeftRadius: hp('1%'),
    borderBottomRightRadius: hp('1%'),
    width: wp('98%'),
  },
  leftColumn: {
    alignItems: 'center',
    marginTop: wp('1%'),
  },
  rightColumn: {
    marginTop: wp('1%'),
  },
  voteText: {
    fontSize: 16,
    color: '#555555',
    fontWeight: '600',
  },
  postTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: hp('1.5%'),
  },
  image: {
    width: wp('25%'),
    height: hp('12%'),
    borderRadius: 5,
  },
  postTitle: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '600',
    textAlign: 'left',
    height: hp('8%'),
    marginLeft: wp('2%'),
  },
  timeUserTribe: {
    flexDirection: 'row',
    marginLeft: wp('2%'),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avatar: {
    width: 20,
    height: 20,
  },
  subReddit: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.green,
    marginLeft: wp('2%'),
  },
  timeText: {
    fontSize: 12,
    color: '#999999',
    marginHorizontal: wp('2%'),
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: hp('1%'),
    marginTop: 10,
    paddingTop: 5,
    borderTopWidth: 0.3,
    borderTopColor:
      Platform.OS === 'ios'
        ? Colors.ultraLightGrey
        : Colors.black,
    width: wp('92%'),
  },
  commentText: {
    fontSize: 12,
    color: '#999999',
    marginHorizontal: wp('1.5%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareIcon: {
    marginLeft: wp('2%'),
  },
  downIcon: {
    marginBottom: hp('.3%'),
  },
  upIcon: {
    marginTop: hp('.3%'),
  },
  commentIcon: {
    marginTop: hp('.4%'),
  },
})
