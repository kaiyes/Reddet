import { StyleSheet, Platform } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6200EA'
  },
  secondContainer: {
    backgroundColor: 'white',
    width: wp('96%'),
    height: hp('92%')
  },
  post: {
    backgroundColor: '#ffffff',
    flexDirection: 'row'
  },
  leftColumn: {
    marginTop: 20,
    marginRight: 12,
    marginLeft: 12,
    alignItems: 'center'
  },
  rightColumn: {
    width: wp('83.4%'),
    marginTop: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: wp('1%')
  },
  timeText: {
    fontSize: 12,
    color: '#999999'
  },
  tribeText: {
    fontSize: 10,
    color: '#333333',
    marginLeft: 3
  },
  voteText: {
    fontSize: 12,
    color: '#555555',
    fontWeight: '600'
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  menuOption: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'red',
    width: 177,
    height: 255
  },
  menuOptionText: {
    fontSize: 14,
    color: '#000000',
    marginLeft: 5
  },
  separator: {
    width: wp('96%'),
    height: hp('.2%'),
    backgroundColor: '#f0f0f0'
  },
  image: {
    width: 91,
    height: 61
  },
  tribeText: {
    fontSize: 10,
    letterSpacing: 1,
    color: '#00BEAB',
    fontWeight: '600',
    marginBottom: 1
  },
  postTitleContainer: {
    marginTop: hp('1.5%'),
    marginRight: Platform.OS === 'ios' ? wp('2.5%') : wp('5.3%'),
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  postTitle: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  titleHolder: {
    width: 190,
    marginLeft: 14
  },
  iconContainer: {
    flexDirection: 'row',
    marginRight: 20
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 10
  },
  menu: {
    marginTop: 15
  }
})
