import { StyleSheet } from 'react-native';

const identity = '#FFA1A1';
const identityDarkSoft = '#FF5757';
const identityDarknes = '#930707';

const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingHorizontal: 25,
  },
  identityColor: {
    color: identity,
  },
  identityBackgroundColor: {
    backgroundColor: identity,
  },
  identityColorDark: {
    color: '#FF5757',
  },
  identityBackgroundColorDark: {
    backgroundColor: identityDarknes,
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.35,
    shadowRadius: 2.5,
    elevation: 5,
  },
});

export default {
  globalStyle,
  identity,
  identityDarkSoft,
  identityDarknes,
};
