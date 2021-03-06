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
    justifyContent: 'flex-start',
    width: wp('22%'),
  },
  rightColumn: {
    alignItems: 'flex-start',
    flex: 1,
  },
  iconContainer: {
    position: 'absolute',
    top: -7,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  voteText: {
    fontSize: 12,
    color: Colors.ultraLightGrey,
    fontWeight: '200',
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
  timeUserTribe2: {
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
  dot: {
    marginTop: hp('.5%'),
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
  rowDefined: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('1%'),
    marginTop: hp('.5%'),
    paddingTop: 5,
    borderTopWidth: 0.3,
    borderTopColor:
      Platform.OS === 'ios'
        ? Colors.ultraLightGrey
        : Colors.black,
    width: wp('92%'),
  },
})
