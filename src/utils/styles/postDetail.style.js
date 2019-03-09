import { StyleSheet, Platform } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

export default StyleSheet.create({
  container: {
    backgroundColor: '#000000'
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  postContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: wp('2.5%'),
    borderRadius: 5,
    marginTop: hp('1.7%')
  },
  gridBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  photoContainer: {
    backgroundColor: '#f0f0f0',
    height: hp('48%')
  },
  timeContainer: {
    flexDirection: 'row',
    marginLeft: wp('1.9%'),
    marginTop: Platform.OS === 'ios' ? hp('30%') : hp('34%'),
    marginLeft: wp('4.8%')
  },
  timeText: {
    fontSize: 12,
    color: 'white'
  },
  tribeText: {
    fontSize: 12,
    color: 'white',
    marginLeft: wp('.8%')
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: hp('1.7%'),
    marginLeft: wp('4.8%'),
    marginRight: wp('3.7%')
  },
  image: {
    width: wp('100%')
  },
  userBox: {
    height: hp('11%'),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: '#555555',
    borderBottomWidth: 0.3
  },
  avatar: {
    marginLeft: wp('3.5%')
  },
  nameHolder: {
    marginLeft: wp('2.6%')
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: hp('.3%')
  },
  innerBadge: {
    paddingHorizontal: wp('1%'),
    paddingVertical: hp('.2%'),
    flexDirection: 'row'
  },
  firstBadge: {
    backgroundColor: '#555555',
    borderRadius: wp('1.3%')
  },
  badge: {
    backgroundColor: '#555555',
    borderRadius: wp('1.3%'),
    marginLeft: wp('1%')
  },
  badgeText: {
    fontSize: 9,
    color: 'white',
    paddingHorizontal: wp('.5%'),
    fontWeight: 'bold',
    flexDirection: 'row'
  },
  authorText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000'
  },
  followButton: {
    width: wp('20%'),
    height: hp('3%'),
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: wp('.8%'),
    position: 'absolute',
    marginLeft: wp('72%')
  },
  followText: {
    fontSize: 10,
    color: 'white',
    paddingLeft: wp('2%'),
    fontWeight: 'bold'
  },
  plusIcon: {
    paddingLeft: wp('2%')
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: hp('9.8%')
  },
  voteText: {
    fontSize: 12,
    color: '#000000',
    fontWeight: 'bold',
    marginLeft: 5
  },
  comment: {
    marginLeft: wp('15%'),
    width: wp('8%'),
    height: hp('4.5%'),
    backgroundColor: '#EEEEEE',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    width: wp('8%'),
    height: hp('4.5%'),
    backgroundColor: '#EEEEEE',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('2%')
  },
  postHightLightText: {
    fontSize: 16,
    color: '#999999',
    marginHorizontal: wp('2%'),
    textAlign: 'left'
  },
  quoteHightLightText: {
    fontSize: 16,
    color: '#999999',
    marginHorizontal: wp('5%'),
    textAlign: 'center'
  },
  postText: {
    fontSize: 14,
    color: '#000000',
    marginTop: hp('4.5%'),
    marginHorizontal: wp('2%'),
    lineHeight: 22
  },
  quote: {
    marginTop: hp('4.5%'),
    marginBottom: hp('2%')
  },
  whiteCard: {
    width: wp('45.9%'),
    height: hp('25.7%'),
    alignItems: 'flex-start',
    marginLeft: wp('2.6%'),
    backgroundColor: '#ffffff',
    borderColor: '#555555',
    borderWidth: 0.3
  },
  card: {
    width: wp('45.9%'),
    height: hp('25.7%'),
    backgroundColor: '#333333',
    alignItems: 'flex-start',
    marginLeft: wp('2.6%')
  },
  smallHeaderText: {
    fontSize: 10,
    color: '#999999',
    fontWeight: 'bold',
    marginTop: hp('3%'),
    marginLeft: wp('3.4%')
  },
  mainCardText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: hp('1.5%'),
    marginHorizontal: wp('3.4%'),
    lineHeight: hp('3%')
  },
  cardTimeText: {
    fontSize: 10,
    color: '#999999',
    marginTop: hp('1.5%'),
    marginLeft: wp('3.4%')
  },
  blackSmallHeaderText: {
    fontSize: 10,
    color: '#999999',
    fontWeight: 'bold',
    marginTop: hp('3%'),
    marginLeft: wp('3.4%')
  },
  blackCardMainText: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: hp('1.5%'),
    marginLeft: wp('3.4%'),
    marginRight: wp('5%'),
    lineHeight: hp('3%')
  },
  blackCardTimeText: {
    fontSize: 10,
    color: '#999999',
    marginTop: hp('1.5%'),
    marginLeft: wp('3.4%')
  },
  verticalGap: {
    height: hp('3%')
  },
  leftVertical: {
    backgroundColor: '#cfd8dc',
    width: 1,
    height: 150
  },
  smallVerticalGap: {
    height: hp('1.5%')
  },
  horizontalGap: {
    width: wp('1%')
  },
  cardWithourMargin: {
    width: wp('45.9%'),
    height: hp('25.7%'),
    backgroundColor: '#333333',
    alignItems: 'flex-start'
  },
  headingTextBlack: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: hp('3%'),
    marginBottom: hp('1.5%'),
    marginLeft: wp('2.6%')
  },
  commentBox: {
    backgroundColor: '#ffffff',
    marginHorizontal: wp('2.5%'),
    borderRadius: 5,
    marginTop: hp('4.5%')
  },
  commentNumber: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
    marginLeft: wp('2.13%')
  },
  sortByText: {
    fontSize: 14,
    color: '#78909c',
    marginLeft: wp('18%')
  },
  ratingText: {
    fontSize: 14,
    color: '#000000',
    marginLeft: wp('1.3%')
  },
  searchBox: {
    flexDirection: 'row',
    marginHorizontal: wp('2.13%'),
    marginTop: hp('1.94%')
  },
  replyBox: {
    flexDirection: 'row',
    marginLeft: wp('8'),
    marginRight: wp('5.33%')
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    flex: 1,
    height: hp('6.7%'),
    paddingLeft: wp('2.6%'),
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  inputText: {
    color: '#999999'
  },
  icon: {
    paddingRight: wp('3%')
  },
  crossContainer: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: hp('3%')
  },
  commenterText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: wp('3.2%')
  },
  commentTimeText: {
    fontSize: 14,
    color: '#78909c',
    marginLeft: 5
  },
  commentText: {
    fontSize: 14,
    color: '#000000',
    marginTop: 12,
    marginHorizontal: wp('3.5%'),
    lineHeight: 22
  },
  commentVote: {
    marginLeft: wp('1%')
  },
  replyText: {
    fontSize: 14,
    color: '#6200EA',
    fontWeight: 'bold',
    marginLeft: wp('5.3%')
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#cfd8dc'
  },
  replySeparator: {
    flex: 1,
    height: 1,
    backgroundColor: '#cfd8dc'
  },

  replyCounter: {
    backgroundColor: 'black',
    borderRadius: 3,
    marginLeft: 100
  },
  replyCounterText: {
    color: 'white',
    fontSize: 10,
    padding: 3,
    fontWeight: 'bold'
  },
  dotGap: {
    marginLeft: 20
  },
  reply: {
    marginLeft: wp('5%'),
    flexDirection: 'row'
  },
  htmlContainer: {
    paddingHorizontal: wp('3%')
  }
})
