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
    width: wp('95%'),
    height: hp('1%'),
  },
  post: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderTopLeftRadius: hp('1%'),
    borderTopRightRadius: hp('1%'),
    borderBottomLeftRadius: hp('1%'),
    borderBottomRightRadius: hp('1%'),
    width: wp('95%'),
  },
  leftColumn: {
    marginHorizontal: wp('1.2%'),
    justifyContent: 'center',
    alignItems: 'center',
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
    height: hp('10%'),
    borderRadius: 5,
  },
  postTitle: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '600',
    textAlign: 'auto',
    width: wp('50%'),
    height: hp('7%'),
    marginLeft: wp('2%'),
  },
  timeText: {
    fontSize: 12,
    color: '#999999',
    marginRight: wp('4%'),
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: hp('1%'),
    marginTop: 10,
  },
  timeUserTribe: {
    flexDirection: 'row',
    marginLeft: wp('2%'),
    alignItems: 'center',
  },
  avatar: {
    width: 20,
    height: 20,
    marginRight: 3,
  },
  subReddit: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.primary,
  },
})
