import { StyleSheet, Platform } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import Colors from '../Colors'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  separator: {
    height: hp('1%'),
  },
  post: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    borderBottomWidth: hp('.2%'),
    borderBottomColor: Colors.white,
    marginTop: hp('2%'),
  },
  leftColumn: {
    alignItems: 'center',
    width: wp('25%'),
  },
  rightColumn: {
    alignItems: 'flex-start',
    width: wp('75%'),
  },
  voteText: {
    fontSize: 16,
    color: '#555555',
    fontWeight: '600',
  },
  imageContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 12,
  },
  image: {
    width: wp('70%'),
    height: hp('25%'),
    borderRadius: 5,
    marginRight: wp('3%'),
  },
  postTitle: {
    fontSize: 15,
    color: '#000000',
    fontWeight: '700',
    textAlign: 'left',
    height: hp('10%'),
    width: wp('70%'),
    marginTop: hp('1.5%'),
  },
  timeUserTribe: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: hp('2%'),
  },
  avatar: {
    width: 20,
    height: 20,
  },
  subReddit: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.green,
  },
  timeText: {
    fontSize: 12,
    color: '#999999',
    marginHorizontal: wp('1%'),
  },
  username: {
    fontSize: 12,
    color: Colors.tintColor,
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
  iconShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
  },
})
