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
    backgroundColor: Colors.primary,
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
    marginLeft: wp('1.3%'),
  },
  leftColumn2: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: wp('2%'),
  },
  rightColumn: {
    marginTop: wp('1%'),
  },
  voteText: {
    fontSize: 14,
    color: '#555555',
    fontWeight: '200',
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
  },
  timeUserTribe: {
    flexDirection: 'row',
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
    marginLeft: wp('1%'),
  },
  timeText: {
    fontSize: 12,
    color: '#999999',
    marginHorizontal: wp('1%'),
  },
  pronoun: {
    fontSize: 12,
    color: '#999999',
    marginLeft: wp('1%'),
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('2%'),
    paddingTop: hp('.3%'),
    borderTopWidth: 0.3,
    borderTopColor:
      Platform.OS === 'ios'
        ? Colors.ultraLightGrey
        : Colors.black,
    width: wp('96%'),
  },
  commentText: {
    fontSize: 12,
    color: '#999999',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
